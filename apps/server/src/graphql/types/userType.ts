export const userTypeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    name: String
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(email: String!, name: String): User!
    updateUser(id: ID!, email: String, name: String): User
    deleteUser(id: ID!): Boolean!
  }
`;
