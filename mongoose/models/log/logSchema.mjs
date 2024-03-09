import { mongoose } from 'mongoose';
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
	userId: {
		type: Number,
		required: true
	},
	defective: {
		type: Boolean,
		default: false
	}
}, { timestamps: true });