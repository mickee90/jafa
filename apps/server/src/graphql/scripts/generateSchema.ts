import path from 'path';
import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from '../types';
import { resolvers } from '../resolvers';

async function generateSchema() {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const schemaSDL = printSchema(schema);

  const schemaPath = path.join(__dirname, '..', 'schemas', 'schema.graphql');
  writeFileSync(schemaPath, schemaSDL);
  console.log('GraphQL schema generated at schema.graphql');
}

// Execute the function
generateSchema().catch((error) => {
  console.error('Error generating schema:', error);
});
