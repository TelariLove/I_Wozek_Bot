import { bot } from '../connecting.mjs';

export const command = 'help';
export const description = 'See help';
export const help = { command, description };

bot.help(async (ctx) => {
	ctx.reply(
		'Rolls set damaged or not — /damaged \n',
	);
});
