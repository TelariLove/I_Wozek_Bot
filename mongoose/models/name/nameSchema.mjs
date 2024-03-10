import { mongoose } from 'mongoose';

const { Schema } = mongoose;

export const nameSchema = new Schema({
	first: {
		type: String,
	},
	last: {
		type: String,
	},
});

export default { nameSchema };
