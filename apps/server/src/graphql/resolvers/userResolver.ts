import { IUserData } from '../../models/userModel';
import { userService } from '../../services/userService';
import { RootType } from '../types';

export const userResolvers = {
  Query: {
    users: async () => {
      return await userService.findAll();
    },
    user: async (_: RootType, { id }: { id: string }) => {
      return await userService.findById(id);
    },
  },
  Mutation: {
    createUser: async (
      _: RootType,
      { email, username, name, password, sex, birthDate }: IUserData
    ) => {
      return await userService.create({
        email,
        username,
        name,
        password,
        sex,
        birthDate,
      });
    },
    loginUser: async (
      _: RootType,
      { email, password }: { email: string; password: string }
    ) => {
      const user = await userService.verify(email, password);
      if (!user) {
        throw new Error('Invalid email or password');
      }

      return user;
    },
    updateUser: async (
      _: RootType,
      {
        id,
        email,
        name,
        sex,
        birthDate,
      }: {
        id: string;
        email?: string;
        name?: string;
        sex?: string;
        birthDate?: string;
      }
    ) => {
      return await userService.update(id, {
        email,
        name,
        sex,
        birthDate: new Date(birthDate),
      });
    },
    deleteUser: async (
      _: RootType,
      { id }: { id: string },
      context: { user: { id: string } }
    ) => {
      const currentUserId = context.user.id;
      return await userService.remove(id, currentUserId);
    },
  },
};
