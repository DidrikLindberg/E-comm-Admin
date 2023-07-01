const { AuthenticationError } = require('apollo-server-express');
const { Admin, Customer, ProductTag, Tag, User, Product, Category, Order, OrderItem } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        admins: async () => {
            return Admin.find();
        }
    },
    Mutation: {
        addAdmin: async (parent, { username, email, password }) => {
            const admin = await Admin.create({ username, email, password });
            const token = signToken(admin);
            return { token, admin };
        }
    }
};

module.exports = resolvers;