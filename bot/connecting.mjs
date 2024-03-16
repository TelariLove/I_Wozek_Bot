import { Telegraf } from 'telegraf';
import { session } from 'telegraf/session';
import { BOT_TOKEN } from '../config.mjs';
import { store } from './store.mjs';
import { stage } from './stage.mjs';

const bot = new Telegraf(BOT_TOKEN);

bot.use(session(store));
bot.use(stage);

export { bot };
export default { bot };
