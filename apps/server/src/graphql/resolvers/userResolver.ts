import { IGraphQLUser } from '../../models/userModel';
import { userService } from '../../services/userService';
import { RootType } from '../types';
import { transformDocument } from '../utils/transform';

export const userResolvers = {
  Query: {
    users: async (): Promise<IGraphQLUser[]> => {
      return await userService.findAll();
    },
    user: async (
      _: RootType,
      { id }: { id: string }
    ): Promise<IGraphQLUser | null> => {
      return await userService.findById(id);
    },
  },
  Mutation: {
    createUser: async (
      _: RootType,
      { email, username, name, password, sex, birthDate }: IGraphQLUser
    ): Promise<IGraphQLUser> => {
      const user = await userService.create({
        email,
        username,
        name,
        password,
        sex,
        birthDate: new Date(birthDate),
      });

      return transformDocument(user);
    },
    loginUser: async (
      _: RootType,
      { email, password }: { email: string; password: string }
    ): Promise<IGraphQLUser | null> => {
      const user = await userService.verify(email, password);
      if (!user) {
        throw new Error('Invalid email or password');
      }

      return {
        ...transformDocument(user),
        birthDate: user.birthDate.toString(),
      };
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
    ): Promise<IGraphQLUser | null> => {
      const user = await userService.update(id, {
        email,
        name,
        sex,
        birthDate: new Date(birthDate),
      });

      return transformDocument(user);
    },
    deleteUser: async (
      _: RootType,
      { id }: { id: string },
      context: { user: { id: string } }
    ): Promise<boolean> => {
      const currentUserId = context.user.id;
      const result = await userService.remove(id, currentUserId);

      return result ? true : false;
    },
  },
};
