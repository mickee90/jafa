import { muscleGroupService } from '../../services/muscleGroupService';
import { RootType } from '../types';
import { IGraphQLMuscleGroup } from '../../models/muscleGroupModel';

export const muscleGroupResolver = {
  Query: {
    muscleGroups: async (): Promise<IGraphQLMuscleGroup[]> => {
      return await muscleGroupService.getAll();
    },
    muscleGroup: async (
      _: RootType,
      { id }: { id: string }
    ): Promise<IGraphQLMuscleGroup | null> => {
      return await muscleGroupService.getById(id);
    },
    muscleGroupByName: async (
      _: RootType,
      { name }: { name: string }
    ): Promise<IGraphQLMuscleGroup | null> => {
      return await muscleGroupService.getByName(name);
    },
  },
};
