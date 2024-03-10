import { Model } from '../../Model.mjs';
import { inventorySchema } from './inventorySchema.mjs';

export class InventoryModel extends Model {
	schema = inventorySchema;

	name = 'inventory';

	model;

	constructor() {
		super();
		this.model = this.mongoose.model(this.name, this.schema);
	}

	async add(add) {
		return await this.model.create(add);
	}
}

export const inventoryModel = new InventoryModel();
