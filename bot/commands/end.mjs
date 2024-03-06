import { bot } from './../connecting.mjs';

export let command = 'end';
export let description = 'finish inventory';
export let end = {command, description};



bot.command('end', async (ctx) => {
	let start;
	let end = new Date();

	if(ctx.session.start) {
		start = ctx.session.start;
		ctx.session.start = false;
		await ctx.reply(`inventory: started ${start}—${end} ended`)
	} else {
		await ctx.reply('use the /start command');
	}
});