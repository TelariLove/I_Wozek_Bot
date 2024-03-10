import { mongoose } from 'mongoose';
import { rollsSchema } from './../rolls/rollsSchema.mjs';
import { userSchema } from '../user/userSchema.mjs';
const Schema = mongoose.Schema;

export const inventorySchema = new Schema({
	rollsy: [rollsSchema],
	user: {
		type: userSchema,
		required: true
	},
	start: {
		type: Date,
		required: true
	},
	end: {
		type: Date,
		required: true
	}
}, { timestamps: true });