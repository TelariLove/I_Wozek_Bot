import _ from 'lodash';
import { templateCloseButton } from './templateCloseButton.mjs';

export const templatePagination = () => {
	let i = 0;
	let buttons = [];

	while (i < 1600) {
		buttons.push({
			text: `${i + 1} - ${i + 50}`,
			callback_data: JSON.stringify({
				type: 'page',
				data: {
					from: i + 1,
					to: i + 50,
				},
			}),
		});
		i += 50;
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

export default { templatePagination };
