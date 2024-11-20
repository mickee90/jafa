import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from '../types';
import { resolvers } from '../resolvers';
import { writeFileSync } from 'fs';

async function generateSchema() {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  const schemaSDL = schema.toString();

  writeFileSync('../schemas/schema.graphql', schemaSDL);
  console.log('GraphQL schema generated at schema.graphql');
}

// Execute the function
generateSchema().catch((error) => {
  console.error('Error generating schema:', error);
});
