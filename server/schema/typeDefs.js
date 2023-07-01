const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Category {
    id: ID!
    name: String!
  }

  type Product {
    id: ID!
    category: Category!
    title: String!
    description: String!
    image: String!
    headline: String!
    createdBy: User!
  }

  type Query {
    users: [User!]!
    categories: [Category!]!
    products: [Product!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User!
  }
`;

module.exports = typeDefs;
