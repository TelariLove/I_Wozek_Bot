import { mongoose } from 'mongoose';
import { userSchema } from './../user/userSchema.mjs';
import { rollsSchema } from './../rolls/rollsSchema.mjs';
const Schema = mongoose.Schema;

export const logSchema = new Schema({
	rolls: {
		type: rollsSchema,
		required: true,
	},
	messageId: {
		type: Number,
		required: true
	},
	user: {
		type: userSchema,
		required: true
	}
}, { timestamps: true });