import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { userTypes, users } from './seeds/users';
import { exercises } from './seeds/exercises';
import { muscleGroups } from './seeds/muscleGroups';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jafa';
const DB_NAME = 'jafa';

async function main() {
  const client = new MongoClient(MONGODB_URI);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    const db = client.db(DB_NAME);

    // Clear existing collections
    await clearCollections(db, [
      'UserTypes',
      'Users',
      'Exercises',
      'MuscleGroups',
    ]);

    // Create collections if they do not exist
    await createCollectionIfNotExists(db, 'UserTypes');
    await createCollectionIfNotExists(db, 'Users');
    await createCollectionIfNotExists(db, 'Exercises');
    await createCollectionIfNotExists(db, 'MuscleGroups');

    await insertDataToCollection(db, 'UserTypes', userTypes);
    await insertDataToCollection(db, 'Users', await users());
    await insertDataToCollection(db, 'Exercises', exercises);
    await insertDataToCollection(db, 'MuscleGroups', muscleGroups);

    console.log('Collections created successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

async function createCollectionIfNotExists(db, collectionName) {
  const collections = await db.listCollections().toArray();
  const collectionExists = collections.some(
    (col) => col.name === collectionName
  );

  if (!collectionExists) {
    await db.createCollection(collectionName);
    console.log(`Collection '${collectionName}' created.`);
  } else {
    console.log(`Collection '${collectionName}' already exists.`);
  }
}

async function insertDataToCollection(db, collectionName, data) {
  await db.collection(collectionName).insertMany(data);
}

// New function to clear collections
async function clearCollections(db, collectionNames) {
  for (const collectionName of collectionNames) {
    const collectionExists = await db
      .listCollections({ name: collectionName })
      .hasNext();
    if (collectionExists) {
      await db.collection(collectionName).drop();
      console.log(`Collection '${collectionName}' cleared.`);
    }
  }
}

main().catch(console.error);
