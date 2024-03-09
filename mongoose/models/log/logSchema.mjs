import { mongoose } from 'mongoose';
import { userSchema } from './../user/userSchema.mjs';
const Schema = mongoose.Schema;


export const logSchema = new Schema({
	rollsId: {
		type: Number,
		required: true
	},
	messageId: {
		type: Number,
		required: true
	},
	user: {
		type: userSchema,
		required: true
	},
	defective: {
		type: Boolean,
		default: false
	}
}, { timestamps: true });