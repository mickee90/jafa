import { userService } from '../../services/userService';

export const userResolvers = {
  Query: {
    users: async () => {
      return await userService.findAll();
    },
    user: async (_: any, { id }: { id: string }) => {
      return await userService.findById(id);
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      { email, name }: { email: string; name?: string }
    ) => {
      return await userService.create({ email, name });
    },
    updateUser: async (
      _: any,
      { id, ...data }: { id: string; email?: string; name?: string }
    ) => {
      return await userService.update(id, data);
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      return await userService.delete(id);
    },
  },
};
