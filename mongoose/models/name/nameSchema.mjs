import { mongoose } from 'mongoose';
const Schema = mongoose.Schema;


export const nameSchema = new Schema({
	first: {
		type: String
	},
	last: {
		type: String,
	}
});