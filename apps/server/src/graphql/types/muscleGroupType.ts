export const muscleGroupTypeTypeDefs = `#graphql
  type MuscleGroupMetadata {
    exerciseId: String!
    primaryMuscle: Boolean!
    order: Number!
  }

  type MuscleGroup {
    id: ID!
    name: String!
    description: String!
    exercises: [Exercise!]!
    metadata: MuscleGroupMetadata!
  }

  extend type Query {
    muscleGroups: [MuscleGroup!]!
    muscleGroup(id: ID!): MuscleGroup
    muscleGroupByName(name: String!): MuscleGroup
  }
`;
