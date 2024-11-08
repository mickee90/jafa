import { GraphQLError } from 'graphql';
import { ValidationError, DatabaseError } from './graphQLErrors';

export const formatError = (error: GraphQLError) => {
  console.error('GraphQL Error:', error);

  // Handle custom errors
  if (error.originalError instanceof ValidationError) {
    return error;
  }

  if (error.originalError instanceof DatabaseError) {
    return error;
  }

  // Return the original error if it's already a GraphQL error
  if (error instanceof GraphQLError) {
    return error;
  }

  // Default error
  return new GraphQLError(
    (error as Error).message || 'An unexpected error occurred',
    {
      extensions: {
        code: 'INTERNAL_SERVER_ERROR',
      },
    }
  );
};
