import { bot } from './../connecting.mjs';

export let command = 'start';
export let description = 'let\' go start to inventory';
export let start = {command, description};



bot.command('start', async (ctx) => {
	let start = new Date()
	let reply = '';
	if(ctx.session.start) {
		start = ctx.session.start;
		reply = 'inventory has already begun ' + start;
	} else {
		ctx.session.start = start;
		reply = 'inventory starts now ' + start;
	}
	await ctx.reply(reply);
});