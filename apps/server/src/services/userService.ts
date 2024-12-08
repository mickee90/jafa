import { ObjectId } from 'mongodb';
import { getDb } from '../config/db';
import { ValidationError, DatabaseError } from '../errors';
import {
  IGraphQLUser,
  IUser,
  IUserData,
  USER_COLLECTION,
  validateUser,
} from '../models/userModel';
import { UserType } from '../models/userTypeModel';
import bcrypt from 'bcrypt';
import { hashPassword, validatePassword } from '../utils/passwords';

const getCollection = () => getDb().collection<IUser>(USER_COLLECTION);

const findAll = async (includingDelete = false) => {
  try {
    const filter = includingDelete ? {} : { isDeleted: false };
    return await getCollection().find(filter).toArray();
  } catch (error) {
    throw new DatabaseError('Failed to fetch users');
  }
};

const findById = async (
  id: string,
  includingDelete = false
): Promise<IGraphQLUser | null> => {
  try {
    if (!ObjectId.isValid(id)) {
      throw new ValidationError('Invalid user ID');
    }

    const user = await getCollection().findOne({
      _id: new ObjectId(id),
      isDeleted: includingDelete,
    });
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
};

const create = async (data: IUserData): Promise<IGraphQLUser | null> => {
  try {
    if (!data.userType || !Object.values(UserType).includes(data.userType)) {
      data.userType = UserType.STANDARD;
    }

    const errors = validateUser(data);
    if (errors.length > 0) {
      throw new ValidationError(errors.join(', '));
    }

    // Validate password
    const passwordErrors = validatePassword(data.password);
    if (passwordErrors.length > 0) {
      throw new ValidationError(passwordErrors.join(', '));
    }

    const existingUser = await getCollection().findOne({ email: data.email });
    if (existingUser) {
      throw new ValidationError('Email already exists');
    }
    4;
    const hashedPassword = await hashPassword(data.password);

    const now = new Date();
    const newUser = {
      ...data,
      password: hashedPassword, // Store the hashed password
      isDeleted: false,
      deletedAt: null,
      deletedBy: null,
      createdAt: now,
      updatedAt: now,
    };

    const result = await getCollection().insertOne(newUser);
    if (!result.acknowledged) {
      throw new DatabaseError('Failed to create user');
    }

    return await getCollection().findOne({ _id: result.insertedId });
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }
    throw new DatabaseError('Failed to create user');
  }
};

const update = async (
  id: string,
  data: Partial<IUserData>
): Promise<IUser | null> => {
  try {
    if (data.password) {
      // Validate password if it's being updated
      const passwordErrors = validatePassword(data.password);
      if (passwordErrors.length > 0) {
        throw new ValidationError(passwordErrors.join(', '));
      }

      data.password = await hashPassword(data.password);
    }

    const result = await getCollection().findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );

    if (!result) {
      throw new ValidationError('User not found');
    }

    return result;
  } catch (error) {
    throw new DatabaseError('Failed to update user');
  }
};

const remove = async (
  id: string,
  currentUserId: string
): Promise<IGraphQLUser | null> => {
  try {
    if (!ObjectId.isValid(id)) {
      throw new ValidationError('Invalid user ID');
    }

    const updateResult = await getCollection().updateOne(
      { _id: new ObjectId(id), isDeleted: false },
      {
        $set: {
          isDeleted: true,
          deletedAt: new Date(),
          deletedBy: currentUserId,
          updatedAt: new Date(),
        },
      }
    );

    return updateResult;
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }

    throw new DatabaseError(
      error instanceof Error ? error.message : 'Failed to delete user'
    );
  }
};

const permanentDelete = async (id: string): Promise<boolean> => {
  try {
    if (!ObjectId.isValid(id)) {
      throw new ValidationError('Invalid user ID');
    }

    const result = await getCollection().deleteOne({ _id: new ObjectId(id) });

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
};

const restore = async (id: string): Promise<IGraphQLUser | null> => {
  try {
    if (!ObjectId.isValid(id)) {
      throw new ValidationError('Invalid user ID');
    }

    const updateResult = await getCollection().updateOne(
      { _id: new ObjectId(id), isDeleted: true },
      {
        $set: {
          isDeleted: false,
          deletedAt: null,
          deletedBy: null,
          updatedAt: new Date(),
        },
      }
    );

    return updateResult;
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }

    throw new DatabaseError(
      error instanceof Error ? error.message : 'Failed to restore user'
    );
  }
};

const findPaginated = async (
  filter = {},
  page = 1,
  limit = 10,
  options = {}
) => {
  const skip = (page - 1) * limit;
  const finalFilter = { ...filter, isDeleted: false };

  const [total, items] = await Promise.all([
    getCollection().countDocuments(finalFilter),
    getCollection()
      .find(finalFilter, options)
      .skip(skip)
      .limit(limit)
      .toArray(),
  ]);

  return {
    items,
    total,
    page,
    totalPages: Math.ceil(total / limit),
    hasMore: page * limit < total,
  };
};

const verify = async (
  email: string,
  password: string
): Promise<IUser | null> => {
  try {
    const user = await getCollection().findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }

    return null;
  } catch (error) {
    throw new DatabaseError('Failed to verify user');
  }
};

export const userService = {
  create,
  update,
  remove,
  permanentDelete,
  restore,
  verify,
  findAll,
  findById,
  findPaginated,
};
