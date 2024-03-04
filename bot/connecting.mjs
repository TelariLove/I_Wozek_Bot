import { Telegraf } from 'telegraf'

export let bot;

try {
	if(process.env.BOT_TOKEN === undefined) {
		throw new Error('BOT TOKEN is undefined');
	}

	bot = new Telegraf(process.env.BOT_TOKEN);
} catch(e) {
	throw new Error('Telegram connection failure!')
}