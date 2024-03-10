import { bot } from '../connecting.mjs';
import { ERROR_COMMAND_FIRST_START } from '../Error.mjs';
import { inventoryModel } from '../../mongoose/models/inventory/inventoryModel.mjs';

export const command = 'end';
export const description = 'finish inventory';
export const end = { command, description };

bot.command('end', async (ctx) => {
	try {
		if (!ctx.session.inventory.start) throw new Error(ERROR_COMMAND_FIRST_START);
		ctx.session.inventory.end = new Date();
		await inventoryModel.add({
			rollsy: ctx.session.inventory.rollsy,
			user: {
				id: ctx.from.id,
				isBot: ctx.from.is_bot,
				name: {
					first: ctx.from.first_name,
					last: ctx.from.last_name,
				},
			},
			start: ctx.session.inventory.start,
			end: ctx.session.inventory.end,
		});
		await ctx.reply(`inventory: started ${ctx.session.inventory.start}—${ctx.session.inventory.end} ended`);
		ctx.session.inventory = {
			start: undefined,
			end: undefined,
			rollsy: [],
		};
	} catch (error) {
		if (error.message === ERROR_COMMAND_FIRST_START) await ctx.reply('command error\nUse first /start command');
	}
});
