import { bot } from '../connecting.mjs';

export const command = 'start';
export const description = 'let\' go start to inventory';
export const start = { command, description };

bot.command('start', async (ctx) => {
	if (ctx.session.inventory.start) {
		await ctx.reply(`inventory has already begun ${ctx.session.inventory.start}`);
	} else {
		ctx.session.inventory.start = new Date();
		await ctx.reply(`inventory starts now ${start}`);
	}
});
