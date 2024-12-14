export const userTypeDefs = `#graphql
  type User {
    id: ID!
    email: String!
    username: String!
    name: String!
    sex: String!
    birthDate: String!
  }

  type LoggedInUser {
    user: User!
    token: String!
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(email: String!, name: String): User!
    updateUser(id: ID!, email: String, name: String): User
    deleteUser(id: ID!): Boolean!
    loginUser(email: String!, password: String!): LoggedInUser
  }
`;
