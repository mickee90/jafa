import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';
import { setupCollections } from '../models/dbSetup';
import { wrapCollection } from '../middlewares/mongodbMiddleware';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jafa';
const DB_NAME = 'jafa';

let db: Db;

export const getDb = <T>() => {
  if (!db) {
    throw new Error('Database not initialized');
  }

  return {
    collection: async <T>(name: string) => {
      // return await db.collection<T>(name);
      return await db.collection<T>(name);
      // const collection = db.collection<T>(name);
      // return await wrapCollection(collection);
    },
  };
};

export const connectDatabase = async () => {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    db = client.db(DB_NAME);

    await setupCollections(db);

    console.log('🗄️  Connected to MongoDB');

    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
