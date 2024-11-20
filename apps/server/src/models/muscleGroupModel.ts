import { ObjectId } from 'mongodb';
import { getDb } from '../config/db';

export const getMuscleGroupCollection = () =>
  getDb().collection<IMuscleGroup>('MuscleGroups');

// MongoDB representations
export interface IMuscleGroup {
  _id: ObjectId;
  name: string;
  description: string;
  exercises: IExercise[];
  metadata: IMetadata;
}

export interface IExercise {
  exerciseId: ObjectId;
  primaryMuscle: boolean;
  order: number;
}

export interface IMetadata {
  aliases: string[];
  category: string;
}

// GraphQL representations
export interface IGraphQLMuscleGroup {
  id: string;
  name: string;
  description: string;
  exercises: IGraphQLExercise[];
  metadata: IMetadata;
}

export interface IGraphQLExercise {
  exerciseId: string;
  primaryMuscle: boolean;
  order: number;
}
