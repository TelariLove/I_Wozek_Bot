import { mongoose } from 'mongoose';
const Schema = mongoose.Schema;

export const rollsSchema = new Schema({
	numer: {
		type: Number,
		required: true
	},
	defected: {
		type: Boolean,
		required: true,
	}}, { timestamps: true });