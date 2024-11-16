import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { hashPassword } from '../utils/passwords';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jafa';
const DB_NAME = 'jafa';

const userTypeData = [
  { type: 'ADMIN' },
  { type: 'STANDARD' },
  { type: 'PREMIUM' },
  { type: 'GUEST' },
];

const userData = [
  {
    username: 'admin',
    email: 'admin@example.com',
    name: 'Admin',
    password: await hashPassword('admin'),
    sex: 'Other',
    birthDate: new Date('1990-01-01'),
    userType: 'ADMIN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: 'user1',
    email: 'user1@example.com',
    name: 'User 1',
    password: await hashPassword('user1'),
    sex: 'Male',
    birthDate: new Date('1995-05-15'),
    userType: 'STANDARD',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

async function main() {
  const client = new MongoClient(MONGODB_URI);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    const db = client.db(DB_NAME);

    // Create collections if they do not exist
    await createCollectionIfNotExists(db, 'UserTypes');
    await createCollectionIfNotExists(db, 'Users');

    await insertDataToCollection(db, 'UserTypes', userTypeData);
    await insertDataToCollection(db, 'Users', userData);

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

main().catch(console.error);
