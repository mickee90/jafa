import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'apps/server/src/graphql/schemas/schema.graphql',
  generates: {
    'apps/server/src/graphql/types/generated.ts': {
      plugins: ['typescript', 'typescript-resolvers', 'typescript-operations'],
    },
  },
};

export default config;
