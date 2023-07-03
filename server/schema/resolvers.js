const { AuthenticationError } = require('apollo-server-express');
const { ProductTag, Tag, User, Product, Category, Order, OrderItem } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    products: async () => {
      return Product.find();
    },
    categories: async () => {
      return Category.find();
    },
    orders: async () => {
      return Order.find();
    },
    orderItems: async () => {
      return OrderItem.find();
    },


  

    
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addProduct: async (parent, { title, image, description }, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to add a product.');
      }


      const product = await Product.create({ title, image, description });

      return product;
    },
    removeProduct: async (parent, { productId }, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to delete a product.');
      }

      const product = await Product.deleteOne({ _id: productId });

      return product;
  }
  }
};

module.exports = resolvers;
