import { bot } from './../connecting.mjs';
import _ from 'lodash';

export let command = 'pagination';
export let description = 'get pagination';
export let pagination = {command, description};


let template = () => {
	let i = 0;
	let buttons = [];

	
	while(i < 1600) {
		buttons.push({
			text: `${i + 1} - ${i+50}`,
			callback_data: JSON.stringify({
				type: 'page',
				data: {
					from: i + 1,
					to: i + 50
				}
			})
		});
		i += 50;
	}

	buttons = _.chunk(buttons, 5);

	let close = {
		text: `Закрыть меню`,
		callback_data: JSON.stringify({type: 'close'})
	};


	return  {
		reply_markup: {
			inline_keyboard: [
				[close],
				...buttons
			]
		}
	}
}

bot.command('pagination', async (ctx) => {
	// let user = ctx.message.from;
	// let userSession = session.user(user);
	// userSession.rollsIsDamaged = false;

	await ctx.reply('pagination', template());
});