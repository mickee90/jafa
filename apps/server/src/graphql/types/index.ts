import { exerciseTypeDefs } from './exerciseType';
import { muscleGroupTypeTypeDefs } from './muscleGroupType';
import { userTypeDefs } from './userType';

export const typeDefs = `#graphql
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${userTypeDefs}
  ${exerciseTypeDefs}
  ${muscleGroupTypeTypeDefs}
`;

export type RootType = unknown;
