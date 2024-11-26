export const exerciseTypeDefs = `#graphql
  type ExerciseMetadata {
    equipment: [String]!
    difficulty: String!
  }

  type Exercise {
    id: ID!
    name: String!
    description: String!
    instructions: [String!]!
    metadata: ExerciseMetadata!
  }

  extend type Query {
    exercises: [Exercise]!
    exercise(id: ID!): Exercise
    searchExercises(word: String!): [Exercise]!
  }
`
