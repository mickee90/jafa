import { muscleGroupService } from '../../services/muscleGroupService';
import { RootType } from '../types';

export const muscleGroupResolver = {
  Query: {
    muscleGroups: async () => {
      return await muscleGroupService.getAll();
    },
    muscleGroup: async (_: RootType, { id }: { id: string }) => {
      return await muscleGroupService.getById(id);
    },
    muscleGroupByName: async (_: RootType, { name }: { name: string }) => {
      return await muscleGroupService.getByName(name);
    },
  },
};
