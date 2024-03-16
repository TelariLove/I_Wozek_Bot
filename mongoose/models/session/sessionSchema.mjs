import { mongoose } from 'mongoose';

const { Schema } = mongoose;

export const sessionSchema = new Schema({
	key: {
		type: String,
		required: true,
	},
	session: {
		type: Object,
		required: true,
	},
}, { timestamps: true });

export default { sessionSchema };
