import { bot } from './../connecting.mjs';
import { templatePagination } from './../templates/templatePagination.mjs';
import { ERROR_COMMAND_FIRST_START } from './../Error.mjs';

export let command = 'pagination';
export let description = 'get pagination';
export let pagination = {command, description};

bot.command('pagination', async (ctx) => {
	try {
		if(!ctx.session.start) throw new Error(ERROR_COMMAND_FIRST_START)
		await ctx.reply('pagination', templatePagination());
	} catch(error) {
		if(error.message == ERROR_COMMAND_FIRST_START) await ctx.reply('command error\nUse first /start command');
	}
});