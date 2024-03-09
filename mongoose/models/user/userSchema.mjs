import { mongoose } from 'mongoose';
import { nameSchema } from './../name/nameSchema.mjs';
const Schema = mongoose.Schema;


export const userSchema = new Schema({
	id: {
		type: Number,
		required: true
	},
	name: {
		type: nameSchema,
		required: true,
	},
	isBot: {
		type: Boolean,
		required: true
	},
});