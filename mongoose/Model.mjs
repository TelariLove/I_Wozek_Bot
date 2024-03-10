import { mongoose } from 'mongoose';
import { MONGO_DB_NAME } from '../config.mjs';

export class Model {
	mongoose = mongoose;

	db = MONGO_DB_NAME;

	name;

	schema;
}

export default { Model };
