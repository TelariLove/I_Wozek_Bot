import { mongoose } from 'mongoose';
import { MONGO_DB_NAME, MONGO_DB_CONNECTION_URL } from '../config.mjs';

if (!MONGO_DB_NAME || !MONGO_DB_CONNECTION_URL) throw Error('Bad connection to mongo db!');

mongoose.connect(MONGO_DB_CONNECTION_URL);
