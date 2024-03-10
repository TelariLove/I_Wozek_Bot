import _ from 'lodash';
import { templateCloseButton } from './templateCloseButton.mjs';

export const templatePage = (from, to) => {
	let i = from;
	let buttons = [];

	while (i <= to) {
		buttons.push({
			text: i,
			callback_data: JSON.stringify({
				type: 'check',
				data: {
					id: i,
				},
			}),
		});

		i += 1;
	}

	buttons = _.chunk(buttons, 5);

	return {
		reply_markup: {
			inline_keyboard: [
				[templateCloseButton],
				...buttons,
			],
		},
	};
};

export default { templatePage };
