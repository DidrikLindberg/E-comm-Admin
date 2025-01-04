// server/seeders/seed.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Location, Category, Shop, Product, User, FeaturedShop } = require('../models'); // Ensure this path is correct
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ecomdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    // Clear existing data
    await Location.deleteMany({});
    await Category.deleteMany({});
    await Shop.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});
    await FeaturedShop.deleteMany({}); // Clear existing featured shops

    // Seed locations
    const locations = await Location.insertMany([
      { cityName: 'Santa Barbara', latitude: 34.4208, longitude: -119.6982 },
      { cityName: 'New York', latitude: 40.7128, longitude: -74.0060 },
      { cityName: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 },
      { cityName: 'Chicago', latitude: 41.8781, longitude: -87.6298 },
    ]);

    // Seed categories
    const categories = await Category.insertMany([
      { name: 'Gift Cards' },
      { name: 'Toys' },
      { name: 'Accessories' },
      { name: 'Apparel' },
      { name: 'Grooming' },
    ]);

    // Seed shops
    const shops = await Shop.insertMany([
      {
        name: 'Local Coffee Shop',
        address: '123 State St, Santa Barbara, CA',
        description: 'A cozy place to enjoy your favorite coffee.',
        imageURL: 'https://picsum.photos/200/200?image=1011',
        location: locations[0]._id,
        isFeatured: true,
      },
      {
        name: 'Downtown Diner',
        address: '456 Diner Ave, New York, NY',
        description: 'Classic diner serving breakfast all day.',
        imageURL: 'https://picsum.photos/200/200?image=1012',
        location: locations[1]._id,
        isFeatured: true,
      },
      {
        name: 'Pet Supplies Plus',
        address: '789 Pet St, Los Angeles, CA',
        description: 'Your one-stop shop for all pet supplies.',
        imageURL: 'https://picsum.photos/200/200?image=1013',
        location: locations[2]._id,
        isFeatured: true,
      },
    ]);

    // Seed products
    const products = await Product.insertMany([
      {
        title: 'Local Coffee Shop Gift Card',
        price: 25.00,
        description: 'Treat yourself or a friend to a delicious coffee at our local coffee shop!',
        description2: 'This gift card is redeemable for any coffee or pastry item on our menu.',
        image: 'https://picsum.photos/300/200?image=1011',
        category: categories[0]._id,
        shop: shops[0]._id,
      },
      {
        title: 'Downtown Diner Gift Card',
        price: 50.00,
        description: 'Enjoy a meal at the Downtown Diner with this gift card!',
        description2: 'This gift card is redeemable for any menu item at our diner.',
        image: 'https://picsum.photos/300/200?image=1012',
        category: categories[0]._id,
        shop: shops[1]._id,
      },
      {
        title: 'Dog Toy',
        price: 15.00,
        description: 'A fun toy for your furry friend.',
        description2: 'Made from durable materials and designed for safe play.',
        image: 'https://picsum.photos/300/200?image=1013',
        category: categories[1]._id,
        shop: shops[2]._id,
      },
    ]);

    // Seed users
    const saltRounds = 10;
    const adminPassword = await bcrypt.hash('adminpassword', saltRounds);
    const customerPassword = await bcrypt.hash('customerpassword', saltRounds);

    await User.insertMany([
      {
        username: 'admin',
        email: 'admin@example.com',
        password: adminPassword,
        role: 'admin',
      },
      {
        username: 'customer1 ',
        email: 'customer1@example.com',
        password: customerPassword,
        role: 'customer',
      },
      {
        username: 'customer2',
        email: 'customer2@example.com',
        password: customerPassword,
        role: 'customer',
      },
    ]);

    // Create featured shops
    const featuredShops = await FeaturedShop.insertMany(
      shops.map(shop => ({
        shop: shop._id, // Reference to the Shop model
        featuredDate: new Date(), // Set the current date as the featured date
      }))
    );

    console.log('Data seeded successfully:', {
      locations,
      categories,
      shops,
      products,
      // users,
      featuredShops,
    });
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed function
seedData();