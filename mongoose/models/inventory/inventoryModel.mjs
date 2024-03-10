import { Model } from './../../Model.mjs';
import { inventorySchema } from './inventorySchema.mjs';

export class InventoryModel extends Model {
	schema = inventorySchema;
	name = 'inventory';
	model;

	constructor() {
		super();
		this.model = this.mongoose.model(this.name, this.schema);
	}

	async add({rollsy, user, start, end}) {
		return await this.model.create({
			rollsy: rollsy,
			user: user,
			start: start,
			end: end
		});
	}
}

export let inventoryModel = new InventoryModel();