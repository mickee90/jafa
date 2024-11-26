import {
  getMuscleGroupCollection,
  IGraphQLMuscleGroup,
} from '../models/muscleGroupModel';
import { ObjectId } from 'mongodb';
import { ValidationError, DatabaseError } from '../errors'; // Import custom error classes

const getAll = async (): Promise<IGraphQLMuscleGroup[] | []> => {
  try {
    return await getMuscleGroupCollection().find().toArray();
  } catch (error) {
    throw new DatabaseError('Failed to fetch muscle groups from the database');
  }
};

const getById = async (id: string): Promise<IGraphQLMuscleGroup | null> => {
  if (!ObjectId.isValid(id)) {
    throw new ValidationError('Invalid muscle group ID format');
  }

  const objectId = new ObjectId(id);

  try {
    const muscleGroup = await getMuscleGroupCollection().findOne({
      _id: objectId,
    });

    if (!muscleGroup) {
      throw new Error(`Muscle group with ID ${id} not found`);
    }

    return muscleGroup;
  } catch (error) {
    throw new DatabaseError('Failed to fetch muscle group from the database');
  }
};

// Get a muscle group including all exercises
const getByName = async (groupName): Promise<IGraphQLMuscleGroup | null> => {
  const result = await getMuscleGroupCollection()
    .aggregate([
      { $match: { name: groupName } },
      {
        $lookup: {
          from: 'exercises',
          localField: 'exercises.exerciseId',
          foreignField: '_id',
          as: 'exerciseDetails',
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          description: 1,
          exercises: {
            $map: {
              input: '$exercises',
              as: 'groupExercise',
              in: {
                $mergeObjects: [
                  '$$groupExercise',
                  {
                    details: {
                      $arrayElemAt: [
                        {
                          $filter: {
                            input: '$exerciseDetails',
                            cond: {
                              $eq: ['$$this._id', '$$groupExercise.exerciseId'],
                            },
                          },
                        },
                        0,
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      },
    ])
    .toArray();

  return result[0];
};

export const muscleGroupService = {
  getAll,
  getById,
  getByName,
};
