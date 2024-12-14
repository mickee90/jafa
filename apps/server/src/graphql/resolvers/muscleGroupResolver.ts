import { muscleGroupService } from '../../services/muscleGroupService';
import { RootType } from '../types';
import { IGraphQLMuscleGroup } from '../../models/muscleGroupModel';
import { transformDocument, transformDocuments } from '../utils/transform';

export const muscleGroupResolver = {
  Query: {
    muscleGroups: async (): Promise<IGraphQLMuscleGroup[]> => {
      const muscleGroups = await muscleGroupService.getAll();

      return transformDocuments(muscleGroups);
    },
    muscleGroup: async (
      _: RootType,
      { id }: { id: string }
    ): Promise<IGraphQLMuscleGroup | null> => {
      const muscleGroup = await muscleGroupService.getById(id);

      return transformDocument(muscleGroup);
    },
    muscleGroupByName: async (
      _: RootType,
      { name }: { name: string }
    ): Promise<IGraphQLMuscleGroup | null> => {
      const muscleGroup = await muscleGroupService.getByName(name);

      return transformDocument(muscleGroup);
    },
  },
};
