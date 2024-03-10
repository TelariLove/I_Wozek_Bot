import { bot } from '../connecting.mjs';

export const command = 'status';
export const description = 'get status session';
export const status = { command, description };

bot.command('status', async (ctx) => {
	await ctx.reply(JSON.stringify(ctx.session));
});
