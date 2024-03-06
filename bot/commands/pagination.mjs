import { bot } from './../connecting.mjs';
import { templatePagination } from './../templates/templatePagination.mjs';

export let command = 'pagination';
export let description = 'get pagination';
export let pagination = {command, description};



bot.command('pagination', async (ctx) => {
	await ctx.reply('pagination', templatePagination());
});