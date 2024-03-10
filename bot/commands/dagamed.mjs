import { bot } from '../connecting.mjs';

export const command = 'damaged';
export const description = 'rolls set status ❌ or ✅';
export const damaged = { command, description };

bot.command('damaged', async (ctx) => {
	await ctx.reply('rolls set status ❌ or ✅', {
		reply_markup: {
			inline_keyboard: [
				[{
					text: '❌',
					callback_data: JSON.stringify({
						type: 'damaged',
					}),
				},
				{
					text: '✅',
					callback_data: JSON.stringify({
						type: 'fine',
					}),
				}],
			],
		},
	});
});
