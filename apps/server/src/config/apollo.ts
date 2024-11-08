import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from '../graphql/types';
import { resolvers } from '../graphql/resolvers';
import { formatError } from '../errors';
import { Request } from 'express';

export const createApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError,
  });

  await server.start();

  return {
    middleware: expressMiddleware(server, {
      context: async ({ req }: { req: Request & { user?: any } }) => ({
        user: req.user,
      }),
    }),
    server,
  };
};
