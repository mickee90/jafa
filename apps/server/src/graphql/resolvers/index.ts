import { Resolvers } from '../types/generated';
import { exerciseResolver } from './exerciseResolver';
import { muscleGroupResolver } from './muscleGroupResolver';
import { userResolvers } from './userResolver';

export const resolvers: Resolvers = {
  Query: {
    ...userResolvers.Query,
    ...exerciseResolver.Query,
    ...muscleGroupResolver.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};
