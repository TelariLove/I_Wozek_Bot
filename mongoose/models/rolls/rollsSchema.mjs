import { mongoose } from 'mongoose';

const { Schema } = mongoose;

export const rollsSchema = new Schema({
	numer: {
		type: Number,
		required: true,
	},
	defected: {
		type: Boolean,
		required: true,
	},
}, { timestamps: true });

export default { rollsSchema };
