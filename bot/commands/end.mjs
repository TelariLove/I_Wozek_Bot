import { bot } from './../connecting.mjs';
import { ERROR_COMMAND_FIRST_START } from './../Error.mjs';
import { inventoryModel } from './../../mongoose/models/inventory/inventoryModel.mjs';

export let command = 'end';
export let description = 'finish inventory';
export let end = {command, description};

bot.command('end', async (ctx) => {
	try {
		if(!ctx.session.inventory.start) throw new Error(ERROR_COMMAND_FIRST_START);

		let { start, rollsy } = ctx.session.inventory;
		let end = new Date();
		console.log(ctx.from)
		await inventoryModel.add({
			rollsy: rollsy,
			user: {
				id: ctx.from.id,
				isBot: ctx.from.is_bot,
				name: {
					first: ctx.from.first_name,
					last: ctx.from.last_name,
				}
			},
			start: start,
			end: end
		})


		
		await ctx.reply(`inventory: started ${start}—${end} ended`);
		ctx.session.inventory = {
			start: undefined,
			end: undefined,
			rollsy: []
		}
	} catch(error) {
		if(error.message == ERROR_COMMAND_FIRST_START) await ctx.reply('command error\nUse first /start command')
	}
});