import { bot } from './../connecting.mjs';

export let command = 'status';
export let description = 'get status session';
export let status = {command, description};

bot.command('status', async (ctx) => {
	await ctx.reply(JSON.stringify(ctx.session));
});