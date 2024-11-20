import { ObjectId } from 'mongodb';
import { getExerciseCollection } from '../models/exerciseModel';
import { getMuscleGroupCollection } from '../models/muscleGroupModel';
import { DatabaseError, ValidationError } from '../errors';

const getAll = async () => {
  return await getExerciseCollection().find().toArray();
};

const getById = async (id: string) => {
  try {
    if (!ObjectId.isValid(id)) {
      throw new ValidationError('Invalid user ID');
    }

    const objectId = new ObjectId(id);

    const exercise = await getExerciseCollection().findOne({ _id: objectId });

    if (!exercise) {
      throw new Error(`Exercise with ID ${id} not found`);
    }

    return exercise;
  } catch (error) {
    throw new DatabaseError('Failed to fetch exercise from the database');
  }
};

// Search exercises by name across all groups
const search = async (searchTerm: string) => {
  return await getExerciseCollection()
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
};

// Find exercises that belong to multiple groups
const findSharedExercises = async () => {
  return await getMuscleGroupCollection()
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
};

// Get all groups that contain a specific exercise
const getGroupsForExercise = async (exerciseName) => {
  const exercise = await getExerciseCollection().findOne({
    name: exerciseName,
  });

  if (!exercise) return [];

  return await getMuscleGroupCollection()
    .find({
      'exercises.exerciseId': exercise._id,
    })
    .toArray();
};

export const exerciseService = {
  getAll,
  getById,
  search,
  findSharedExercises,
  getGroupsForExercise,
};
