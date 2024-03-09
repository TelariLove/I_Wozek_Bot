import { mongoose } from 'mongoose';
import { nameSchema } from './../name/nameSchema.mjs';
const Schema = mongoose.Schema;

export const rollsSchema = new Schema({
	numer: {
		type: Number,
		required: true
	},
	defected: {
		type: Boolean,
		required: true,
	}
});