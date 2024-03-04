import _ from 'lodash';
import {templateCloseButton} from './templateCloseButton.mjs';

export let templatePage = (from, to) => {
	let buttons = [];

	while(from <= to) {
		buttons.push({
			text: from,
			callback_data: JSON.stringify({
				type: 'check',
				data: {
					id: from
				}
			})
		})

		from++;
	}

	buttons = _.chunk(buttons, 5);

	return {
		reply_markup: {
			inline_keyboard: [
				[templateCloseButton],
				...buttons
			]
		}
	}
};