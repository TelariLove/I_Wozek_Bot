import { Model } from './../../Model.mjs';
import { logSchema } from './logSchema.mjs';

export class LogModel extends Model {
	schema = logSchema;
	name = 'log';
	model;

	constructor() {
		super();
		this.model = this.mongoose.model(this.name, this.schema);
	}

	async add({messageId, user, rolls, defective = false}) {
		return await this.model.create({
			messageId: messageId,
			user: user,
			rolls: rolls,
			defective: defective
		}).then((result) => {
			return result;
		});
	}
}

export let logModel = new LogModel();