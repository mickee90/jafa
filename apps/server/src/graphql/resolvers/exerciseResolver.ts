import { exerciseService } from '../../services/exerciseService';
import { RootType } from '../types';

export const exerciseResolver = {
  Query: {
    exercises: async () => {
      return await exerciseService.getAll();
    },
    exercise: async (_: RootType, { id }: { id: string }) => {
      return await exerciseService.getById(id);
    },
    searchExercises: async (_: RootType, { word }: { word: string }) => {
      return await exerciseService.search(word);
    },
  },
};
