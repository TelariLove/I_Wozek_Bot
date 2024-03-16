import { Composer, Markup } from 'telegraf';
import { keyboardRangeRolls } from './keyboards/keyboardRangeRolls.mjs';
import { keyboardRolls } from './keyboards/keyboardRolls.mjs';
import { buttonIsDefected } from './keyboards/buttonIsDefected.mjs';
import { logModel } from '../../../mongoose/models/log/logModel.mjs';
import { inventoryModel } from '../../../mongoose/models/inventory/inventoryModel.mjs';

export const wizardRolls = new Composer();
export default { wizardRolls };

wizardRolls.start(async (ctx) => {
	ctx.wizard.state.user = {
		id: ctx.from.id,
		isBot: ctx.from.is_bot,
		name: {
			first: ctx.from.first_name,
			last: ctx.from.last_name,
		},
	};
	ctx.wizard.state.start = new Date();
	ctx.wizard.state.rollsy = [];
	await ctx.reply('Starting the inventor...');

	await ctx.reply('rolls fine?', Markup.keyboard([
		['❌', '✅'],
	]).oneTime().resize());
});

wizardRolls.hears('❌', async (ctx) => {
	ctx.wizard.state.defected = true;
	await ctx.reply('=>', keyboardRangeRolls({
		defected: ctx.wizard.state.defected,
	}));
});

wizardRolls.hears('✅', async (ctx) => {
	ctx.wizard.state.defected = false;
	await ctx.reply('=>', keyboardRangeRolls({
		defected: ctx.wizard.state.defected,
	}));
});

// leave emoji
wizardRolls.hears('♥️', async (ctx) => {
	const { rollsy, start, user } = ctx.wizard.state;
	const end = new Date();
	await inventoryModel.add({
		start,
		rollsy,
		user,
		end,
	});
	await ctx.reply('save..');
	await ctx.scene.leave();
	ctx.wizard.state = {};
});

// normal leave
wizardRolls.hears('/leave', async (ctx) => {
	await ctx.reply('leave..');
	ctx.wizard.state = {};
	await ctx.scene.leave();
});

// show range rolls
wizardRolls.hears(/^\d+—\d+$/, async (ctx) => {
	const { text } = ctx.message;

	const [from, to] = text.split('—')
		.map((element) => Number(element));
	await ctx.reply('=>', keyboardRolls({
		defected: ctx.wizard.state.defected,
		from,
		to,
		rollsy: ctx.wizard.state.rollsy,
	}));
});

// inventory rolls rolls
wizardRolls.hears(/^\d+$/, async (ctx) => {
	const { text, message_id: messageId } = ctx.message;

	ctx.wizard.state.rollsy.push({
		numer: Number(text),
		defected: ctx.wizard.state.defected,
	});

	const { user, defected } = ctx.wizard.state;

	await logModel.add({
		rolls: {
			numer: Number(text),
			defected,
		},
		user,
		messageId,
	});

	await ctx.reply(Number(text) + buttonIsDefected(defected));
	await ctx.reply('=>', keyboardRangeRolls({
		defected,
	}));
});

wizardRolls.on('message', async (ctx) => {
	if (ctx.wizard.state.defected === undefined) {
		await ctx.reply('rolls fine?', Markup.keyboard([
			['❌', '✅'],
		]).oneTime().resize());
	}

	ctx.reply(JSON.stringify(ctx.wizard.state));
});
