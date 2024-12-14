import { exerciseService } from '../../services/exerciseService';
import { RootType } from '../types';
import { IGraphQLExercise } from '../../models/exerciseModel';
import { transformDocument, transformDocuments } from '../utils/transform';

export const exerciseResolver = {
  Query: {
    exercises: async (): Promise<IGraphQLExercise[]> => {
      const exercises = await exerciseService.getAll();

      return transformDocuments(exercises);
    },
    exercise: async (
      _: RootType,
      { id }: { id: string }
    ): Promise<IGraphQLExercise | null> => {
      const exercise = await exerciseService.getById(id);
      return transformDocument(exercise);
    },
    searchExercises: async (
      _: RootType,
      { word }: { word: string }
    ): Promise<IGraphQLExercise[]> => {
      const exercise = await exerciseService.search(word);
      return transformDocument(exercise);
    },
  },
};
