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

	async add({messageId, userId, rollsId, defective = false}) {
		console.log('start add rollse...', messageId, userId, rollsId, defective);
		return await this.model.create({
			messageId: messageId,
			userId: userId,
			rollsId: rollsId,
			defective: defective
		}).then((result) => {
			return result;
		});
	}
}

export let logModel = new LogModel();