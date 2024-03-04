import { Telegraf } from 'telegraf'
import {session} from 'telegraf/session'

export let bot;

try {
	if(process.env.BOT_TOKEN === undefined) {
		throw new Error('BOT TOKEN is undefined');
	}

	bot = new Telegraf(process.env.BOT_TOKEN);
	bot.use(session({
		defaultSession: () => ({
			damaged: false
		}) 
	}));	
} catch(e) {
	throw new Error('Telegram connection failure!')
}