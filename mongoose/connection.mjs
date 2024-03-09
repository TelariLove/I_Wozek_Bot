import { mongoose } from 'mongoose';

if(!process.env.MONGO_DB_NAME || !process.env.MONGO_DB_CONNECTION_URL)
	throw Error('Bad connection to mongo db!')

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL);