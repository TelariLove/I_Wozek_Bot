import _ from 'lodash';
import { Markup } from 'telegraf';
import { buttonIsDefected } from './buttonIsDefected.mjs';

export const keyboardRangeRolls = (opts) => {
	const { defected } = opts;
	const buttons = [];

	for (let i = 0; i < 1600; i += 50) {
		buttons.push(`${i + 1}—${i + 50}`);
	}

	return Markup.keyboard([
		[buttonIsDefected(!defected), '♥️'],
		..._.chunk(buttons, 5),
	]).oneTime().resize();
};
export default { keyboardRangeRolls };
