import { Db } from 'mongodb';
import { USER_COLLECTION, USER_INDEXES } from './userModel';

// Create collections and indexes
export async function setupCollections(db: Db) {
  await setupUserCollection(db);
}

async function setupUserCollection(db: Db) {
  try {
    if (!(await collectionExists(db, USER_COLLECTION))) {
      await db.createCollection(USER_COLLECTION);
    }

    const collection = db.collection(USER_COLLECTION);
    await collection.createIndexes([...USER_INDEXES]);

    console.log('✅ User collection and indexes created successfully');
  } catch (error) {
    console.error('Error setting up user collection:', error);
    throw error;
  }
}

async function collectionExists(
  db: Db,
  collectionName: string
): Promise<boolean> {
  const collections = await db.listCollections().toArray();

  return collections.some((col) => col.name === collectionName);
}
