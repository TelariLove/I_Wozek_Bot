import { Telegraf } from 'telegraf';
import { session } from 'telegraf/session';
import { BOT_TOKEN } from '../config.mjs';

const bot = new Telegraf(BOT_TOKEN);

bot.use(session({
	defaultSession: () => ({
		damaged: false,
		inventory: {
			start: undefined,
			end: undefined,
			rollsy: [],
		},
	}),
}));

export { bot };
export default { bot };
