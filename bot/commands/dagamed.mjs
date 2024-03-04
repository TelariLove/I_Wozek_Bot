import { bot } from './../connecting.mjs';

export let command = 'damaged';
export let description = 'rolls set status ❌ or ✅';
export let damaged = {command, description}

bot.command('damaged', async (ctx) => {
	await ctx.reply('rolls set status ❌ or ✅', {
		reply_markup: {
			inline_keyboard: [
				[{
					text: '❌',
					callback_data: JSON.stringify({
						type: 'damaged'
					})
				},
				{
					text: '✅',
					callback_data: JSON.stringify({
						type: 'fine'
					})
				}]
			]
		}
	});
});