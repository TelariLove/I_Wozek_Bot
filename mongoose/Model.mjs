import './connection.mjs';
import { mongoose } from 'mongoose';

export class Model {
	mongoose = mongoose;
	db = process.env.MONGO_DB_NAME
	name;
	schema;
	
	constructor() {
		return;
	}
}