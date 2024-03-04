import { bot } from './bot/connecting.mjs'
import './bot/commands.mjs'

try {
	bot.on('callback_query', async (ctx) => {
		let data = JSON.parse(ctx.callbackQuery.data);
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