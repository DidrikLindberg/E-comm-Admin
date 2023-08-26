const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String!
    email: String
    role: String
  }




  type Category {
    _id: ID!
    name: String!
  }

  type Product {
    _id: ID
    category: Category
    title: String
    description: String
    image: String
    headline: String
    createdBy: User
  }

  type Order {
    _id: ID!
    user: User!
    products: [Product!]!
  }

  type OrderItem {
    _id: ID!
    order: Order!
    product: Product!
  }

  type Query {
    users: [User!]!
    categories: [Category!]!
    products: [Product!]!
    product(id: ID!): Product
    orders: [Order!]!
    orderItems: [OrderItem!]!
    
  }
    type Auth {
    token: String!
    user: User
  }

  

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): User!
    addProduct(title: String!, image: String, description: String!): Product!
    removeProduct(productId: ID!): Product
    addProductToCart(productId: ID!, quantity: Int!): OrderItem!
    removeProductFromCart(orderItemId: ID!): OrderItem

  }
`;

module.exports = typeDefs;
