import { ObjectId } from 'mongodb';
import { getDb } from '../config/db';
import { ValidationError, DatabaseError } from '../errors';
import {
  IUser,
  IUserData,
  USER_COLLECTION,
  validateUser,
} from '../models/userModel';

export class UserService {
  private get collection() {
    return getDb().collection<IUser>(USER_COLLECTION);
  }

  async findAll() {
    try {
      return await this.collection.find().toArray();
    } catch (error) {
      throw new DatabaseError('Failed to fetch users');
    }
  }

  async findById(id: string) {
    try {
      if (!ObjectId.isValid(id)) {
        throw new ValidationError('Invalid user ID');
      }

      const user = await this.collection.findOne({ _id: new ObjectId(id) });
      if (!user) {
        throw new ValidationError('User not found');
      }

      return user;
    } catch (error) {
      if (error instanceof ValidationError) {
        throw error;
      }

      throw new DatabaseError('Failed to fetch user');
    }
  }

  async create(data: IUserData) {
    try {
      // Validate input
      const errors = validateUser(data);
      if (errors.length > 0) {
        throw new ValidationError(errors.join(', '));
      }

      const existingUser = await this.collection.findOne({ email: data.email });
      if (existingUser) {
        throw new ValidationError('Email already exists');
      }

      const now = new Date();
      const newUser = {
        ...data,
        createdAt: now,
        updatedAt: now,
      };

      const result = await this.collection.insertOne(newUser);
      return await this.collection.findOne({ _id: result.insertedId });
    } catch (error) {
      if (error instanceof ValidationError) {
        throw error;
      }
      throw new DatabaseError('Failed to create user');
    }
  }

  async update(id: string, data: Partial<IUserData>) {
    try {
      if (!ObjectId.isValid(id)) {
        throw new ValidationError('Invalid user ID');
      }

      // Validate input
      const errors = validateUser(data);
      if (errors.length > 0) {
        throw new ValidationError(errors.join(', '));
      }

      const result = await this.collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        {
          $set: {
            ...data,
            updatedAt: new Date(),
          },
        },
        { returnDocument: 'after' }
      );

      if (!result) {
        throw new ValidationError('User not found');
      }

      return result;
    } catch (error) {
      if (error instanceof ValidationError) {
        throw error;
      }

      throw new DatabaseError('Failed to update user');
    }
  }

  async delete(id: string) {
    try {
      if (!ObjectId.isValid(id)) {
        throw new ValidationError('Invalid user ID');
      }

      const result = await this.collection.deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        throw new ValidationError('User not found');
      }

      return true;
    } catch (error) {
      if (error instanceof ValidationError) {
        throw error;
      }

      throw new DatabaseError(
        error instanceof Error ? error.message : 'Failed to delete user'
      );
    }
  }
}

export const userService = new UserService();
