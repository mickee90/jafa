import { exerciseService } from '../../services/exerciseService';
import { RootType } from '../types';
import { IGraphQLExercise } from '../../models/exerciseModel';

export const exerciseResolver = {
  Query: {
    exercises: async (): Promise<IGraphQLExercise[]> => {
      return await exerciseService.getAll();
    },
    exercise: async (
      _: RootType,
      { id }: { id: string }
    ): Promise<IGraphQLExercise | null> => {
      return await exerciseService.getById(id);
    },
    searchExercises: async (
      _: RootType,
      { word }: { word: string }
    ): Promise<IGraphQLExercise[]> => {
      return await exerciseService.search(word);
    },
  },
};
