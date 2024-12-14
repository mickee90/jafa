import { IGraphQLUser } from '../../models/userModel';
import { userService } from '../../services/userService';
import { RootType } from '../types';
import { transformDocument, transformDocuments } from '../utils/transform';
import jwt from 'jsonwebtoken';

export const userResolvers = {
  Query: {
    users: async (): Promise<IGraphQLUser[]> => {
      const users = await userService.findAll();
      return transformDocuments(users);
    },
    user: async (
      _: RootType,
      { id }: { id: string }
    ): Promise<IGraphQLUser | null> => {
      const user = await userService.findById(id);
      return transformDocument(user);
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
    ): Promise<{ user: IGraphQLUser; token: string } | null> => {
      const user = await userService.verify(email, password);
      if (!user) {
        throw new Error('Invalid email or password');
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Set token expiration as needed
      });

      return {
        user: {
          ...transformDocument(user),
          birthDate: user.birthDate.toString(),
        },
        token,
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
