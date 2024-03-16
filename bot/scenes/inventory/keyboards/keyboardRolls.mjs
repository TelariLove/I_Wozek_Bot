import { Markup } from 'telegraf';
import _ from 'lodash';
import { buttonIsDefected } from './buttonIsDefected.mjs';

export const keyboardRolls = (opts) => {
	const {
		from,
		to,
		defected,
		rollsy,
	} = opts;
	const buttons = [];

	for (let i = from; i <= to; i += 1) {
		buttons.push(String(i));
	}
	rollsy.forEach((el) => {
		if (el.numer <= to && el.numer >= from) {
			let text;
			if (el.defected === false) {
				text = '[✅]';
			}

			if (el.defected === true) {
				text = '[❌]';
			}

			buttons[el.numer - from] = text;
		}

		return el;
	});

	return Markup.keyboard([
		[buttonIsDefected(!defected), '♥️'],
		..._.chunk(buttons, 5),
	]).oneTime().resize();
};
export default { keyboardRolls };
