import { mongoose } from 'mongoose';
import { inventorySchema } from '../inventory/inventorySchema.mjs';
import { userSchema } from '../user/userSchema.mjs';

const { Schema } = mongoose;

export const sessionSchema = new Schema({
	inventory: {
		type: inventorySchema,
	},
	user: {
		type: userSchema,
	},
	damaged: {
		type: Boolean,
		default: false,
	},
}, { timestamps: true });

export default { sessionSchema };
