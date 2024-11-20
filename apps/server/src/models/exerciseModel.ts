import { ObjectId } from 'mongodb';
import { getDb } from '../config/db';

export const getExerciseCollection = () =>
  getDb().collection<IExercise>('Exercises');

// MongoDB representation of an exercise
export interface IExercise {
  _id: ObjectId;
  name: string;
  description: string;
  instructions: string[];
  metadata: IExerciseMetadata;
}

// MongoDB representation of exercise metadata
export interface IExerciseMetadata {
  equipment: string[];
  difficulty: string;
}

// GraphQL representation of an exercise
export interface IGraphQLExercise {
  id: string; // Use string for GraphQL ID
  name: string;
  description: string;
  instructions: string[];
  metadata: IExerciseMetadata;
}
