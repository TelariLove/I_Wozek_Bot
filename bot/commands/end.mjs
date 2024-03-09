import { bot } from './../connecting.mjs';
import { ERROR_COMMAND_FIRST_START } from './../Error.mjs';

export let command = 'end';
export let description = 'finish inventory';
export let end = {command, description};

bot.command('end', async (ctx) => {
	try {
		if(!ctx.session.start) throw new Error(ERROR_COMMAND_FIRST_START);

		let { start } = ctx.session;
		ctx.session.start = undefined;
		let end = new Date();
		
		await ctx.reply(`inventory: started ${start}—${end} ended`);

	} catch(error) {
		if(error.message == ERROR_COMMAND_FIRST_START) await ctx.reply('command error\nUse first /start command')
	}
});