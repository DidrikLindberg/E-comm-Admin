const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { ProductTag, Tag, User, Product, Category, Order, OrderItem } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
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
    users: async () => {
        try {
          return await User.find();
        } catch (error) {
          throw new Error('Failed to fetch users');
        }
    },
    product: async (_, { id }) => {
      try {
        const product = await Product.findById(id)
          // .populate('category')
          // .populate('createdBy');
        return product;
      } catch (error) {
        throw new Error('Error fetching product');
      }
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      // Login logic
    },
    addUser: async (parent, { username, email, password }) => {
      // Add user logic
    },
     // Add product mutation
     addProduct: async (parent, { title, image, description, categoryId }) => {
      try {
        // Create a new product with the provided data
        const product = new Product({
          category,
          title,
          image,
          description,
          headline,
          createadby,
          price,
        });

            // Save the product to the database
            await product.save();

            return product;
          } catch (error) {
            // Handle any errors that occur during product creation
            throw new UserInputError('Failed to create a product.', {
              errors: error.message,
            });
          }
        },

    addProductToCart: async (parent, { productId, quantity }, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to add a product to the cart.');
      }

      const product = await Product.findById(productId);
      if (!product) {
        throw new UserInputError('Product not found.');
      }

      // Create a new order item
      const orderItem = new OrderItem({
        product: productId,
        quantity,
        unitPrice: product.price,
        order: user.cart, // Assuming user.cart stores the order ID of the user's cart
      });

      // Save the order item to the database
      await orderItem.save();

      // Return the newly created order item
      return orderItem;
    },
    removeProductFromCart: async (parent, { orderItemId }, { user }) => {
      if (!user) {
        throw new AuthenticationError('You must be logged in to remove a product from the cart.');
      }

      // Find the order item to be removed
      const orderItem = await OrderItem.findById(orderItemId);
      if (!orderItem) {
        throw new UserInputError('Order item not found.');
      }

      // Check if the order item belongs to the user's cart
      if (!user.cart.equals(orderItem.order)) {
        throw new AuthenticationError("You can only remove products from your own cart.");
      }

      // Remove the order item from the database
      await orderItem.remove();

      // Return the removed order item
      return orderItem;
    },
  },
};

module.exports = resolvers;
