import { getJestProjectsAsync } from '@nx/jest';

export default async () => ({
  projects: await getJestProjectsAsync(),
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-paper|@emotion/native)/)',
  ],
  moduleNameMapper: {
    '^@emotion/native$':
      '<rootDir>/node_modules/@emotion/native/dist/emotion-native.cjs.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
});
