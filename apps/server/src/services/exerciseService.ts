import { ObjectId, WithId } from 'mongodb';
import { getExerciseCollection, IExercise } from '../models/exerciseModel';
import {
  getMuscleGroupCollection,
  IMuscleGroup,
} from '../models/muscleGroupModel';
import { DatabaseError, ValidationError } from '../errors';

const getAll = async (): Promise<IExercise[] | []> => {
  const collection = await getExerciseCollection();
  return await collection.find().toArray();
};

const getById = async (id: string): Promise<IExercise | null> => {
  try {
    if (!ObjectId.isValid(id)) {
      throw new ValidationError('Invalid user ID');
    }

    const objectId = new ObjectId(id);

    const collection = await getExerciseCollection();
    const exercise = await collection.findOne({ _id: objectId });

    if (!exercise) {
      throw new Error(`Exercise with ID ${id} not found`);
    }

    return exercise;
  } catch (error) {
    throw new DatabaseError('Failed to fetch exercise from the database');
  }
};

// Search exercises by name across all groups
const search = async (searchTerm: string): Promise<IExercise[] | []> => {
  const collection = await getExerciseCollection();
  const exercises = await collection
    .aggregate([
      {
        $match: {
          name: { $regex: searchTerm, $options: 'i' },
        },
      },
      {
        $lookup: {
          from: 'muscleGroups',
          localField: '_id',
          foreignField: 'exercises.exerciseId',
          as: 'groups',
        },
      },
    ])
    .toArray();

  return exercises as IExercise[];
};

// Find exercises that belong to multiple groups
const findSharedExercises = async (): Promise<IExercise[] | []> => {
  const collection = await getMuscleGroupCollection();
  const exercises = await collection
    .aggregate([
      { $unwind: '$exercises' },
      {
        $group: {
          _id: '$exercises.exerciseId',
          groups: { $push: '$name' },
          count: { $sum: 1 },
        },
      },
      { $match: { count: { $gt: 1 } } },
      {
        $lookup: {
          from: 'exercises',
          localField: '_id',
          foreignField: '_id',
          as: 'exerciseDetails',
        },
      },
    ])
    .toArray();

  return exercises as IExercise[];
};

// Get all groups that contain a specific exercise
const getGroupsForExercise = async (
  exerciseName
): Promise<WithId<IMuscleGroup>[] | []> => {
  const collection = await getExerciseCollection();
  const exercise = await collection.findOne({
    name: exerciseName,
  });

  if (!exercise) return [];

  const muscleGroupCollection = await getMuscleGroupCollection();
  const muscleGroups = await muscleGroupCollection
    .find({
      'exercises.exerciseId': exercise._id,
    })
    .toArray();

  return muscleGroups;
};

export const exerciseService = {
  getAll,
  getById,
  search,
  findSharedExercises,
  getGroupsForExercise,
};
