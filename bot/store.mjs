import { sessionModel } from '../mongoose/models/session/sessionModel.mjs';

export const store = {
	store: sessionModel,
	defaultSession: () => ({
		damaged: false,
		inventory: {
			start: undefined,
			end: undefined,
			rollsy: [],
		},
	}),
};

export default { store };
