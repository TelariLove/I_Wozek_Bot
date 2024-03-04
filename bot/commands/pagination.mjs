import { bot } from './../connecting.mjs';
import { templatePagination } from './../templates/templatePagination.mjs';

export let command = 'pagination';
export let description = 'get pagination';
export let pagination = {command, description};



bot.command('pagination', async (ctx) => {
	// let user = ctx.message.from;
	// let userSession = session.user(user);
	// userSession.rollsIsDamaged = false;

	await ctx.reply('pagination', templatePagination());
});