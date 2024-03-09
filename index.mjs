import { bot } from './bot/connecting.mjs'
import './bot/commands.mjs'
import { logModel } from './mongoose/models/log/logModel.mjs'
import { templatePage } from './bot/templates/templatePage.mjs'

try {
	bot.on('callback_query', async (ctx) => {
		let statusIcon;
		let data = JSON.parse(ctx.callbackQuery.data);
		if(ctx.session.damaged) {
			statusIcon = '❌';
		} else {
			statusIcon = '✅'
		}

		switch(data.type) {
			case 'damaged':
				ctx.session.damaged = true;
				await ctx.editMessageText('❌', {
					message_id: ctx.callbackQuery.message.message_id
				});
				break;
			case 'fine':
				ctx.session.damaged = false;
				await ctx.editMessageText('✅', {
					message_id: ctx.callbackQuery.message.message_id
				});
				break;
			case 'close':
				await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
				break;
			case 'page':
				await ctx.editMessageText('Select rolls', {
					...templatePage(data.data.from, data.data.to),
					message_id: ctx.callbackQuery.message.message_id
				});
				break;
			case 'check':
				ctx.session.logs.push({
					id: data.data.id,
					damaged: ctx.session.damaged,
					date: new Date()
				});

				logModel.add({
					rollsId: data.data.id,
					defected: ctx.session.damaged,
					userId: 123,
					messageId: ctx.callbackQuery.message.message_id
				});
				
				await ctx.editMessageText(data.data.id + statusIcon, {
					message_id: ctx.callbackQuery.message.message_id
				});
				break;
		}
	});

	if(process.env.BOT_TYPE == 'longpool') {
		bot.launch();
	}	
} catch (e) {
	throw new Error(e);
}

// Webhook for aws
export const handler = async (event, ctx, cb) => {
	await bot.handleUpdate(JSON.parse(event.body));

	return cb(null, {
		statusCode: 200,
		body: ''
	})
}