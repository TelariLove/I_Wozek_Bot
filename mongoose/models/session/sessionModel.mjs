import { Model } from '../../Model.mjs';
import { sessionSchema } from './sessionSchema.mjs';

export class SessionModel extends Model {
	schema = sessionSchema;

	name = 'session';

	model;

	constructor() {
		super();
		this.model = this.mongoose.model(this.name, this.schema);
	}

	async get(key) {
		return (await this.model.findOne({ key }))?.session;
	}

	async set(key, session) {
		return await this.model.updateOne({ key }, { $set: { key, session } }, { upsert: true });
	}

	async delete(key) {
		return await this.model.deleteOne({ key });
	}
}

export const sessionModel = new SessionModel();
