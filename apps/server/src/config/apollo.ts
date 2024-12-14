import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from '../graphql/types';
import { resolvers } from '../graphql/resolvers';
import { formatError } from '../errors';
import { Request } from 'express';

export const createApolloServer = async () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    formatError,
  });

  await server.start();

  return {
    middleware: expressMiddleware(server, {
      context: async ({
        req,
      }: {
        req: Request & { user?: { id: string } };
      }) => {
        // Check if the request is for the loginUser mutation
        const isLoginMutation = req.body?.operationName === 'LoginUser';

        if (isLoginMutation) {
          return {}; // No user context needed for login
        }

        // If not login, check for user context
        const user = req.user; // This will be set by the authMiddleware
        return { user };
      },
    }),
    server,
  };
};
