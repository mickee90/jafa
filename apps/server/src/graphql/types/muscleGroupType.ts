export const muscleGroupTypeTypeDefs = `#graphql
  type MuscleGroupMetadata {
    aliases: [String]!
    category: String
  }

  type MuscleGroup {
    id: ID!
    name: String!
    description: String!
    exercises: [Exercise!]!
    metadata: MuscleGroupMetadata!
  }

  extend type Query {
    muscleGroups: [MuscleGroup]!
    muscleGroup(id: ID!): MuscleGroup
    muscleGroupByName(name: String!): MuscleGroup
  }
`
