import { bot } from './../connecting.mjs';

export let command = 'help';
export let description = 'See help';
export let help = {	command, description };

bot.help(async (ctx) => {
	ctx.reply(
		'Rolls set damaged or not — /damaged \n'
	);
});