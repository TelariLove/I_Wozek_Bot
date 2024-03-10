import { Model } from '../../Model.mjs';
import { logSchema } from './logSchema.mjs';

export class LogModel extends Model {
	schema = logSchema;

	name = 'log';

	model;

	constructor() {
		super();
		this.model = this.mongoose.model(this.name, this.schema);
	}

	async add(add) {
		return await this.model.create(add);
	}
}

export const logModel = new LogModel();
export default { logModel, LogModel };
