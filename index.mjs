import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
let bot

if(process.env.BOT_TOKEN === undefined) {
	throw new Error('BOT TOKEN is undefined');
}
try {
	bot = new Telegraf(process.env.BOT_TOKEN);

	bot.on(message('text'), async (ctx) => {
		await ctx.reply(ctx.message.text);
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