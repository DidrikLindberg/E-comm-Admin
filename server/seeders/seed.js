const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User, Category, Product } = require('../models');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI );

const seedData = async () => {
  try {
    await Category.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    const adminUser = await User.create({
      username: 'admin1',
      email: 'admin@admin.com',
      role: 'admin',
      password: await bcrypt.hash('admin123', 10),
    });

    const customerUser = await User.create({
      username: 'customer1',
        email: 'customer@customer.com',
        role: 'customer',
      password: await bcrypt.hash('customer123', 10),
    });

    const categories = [
      { name: 'Electronics' },
      { name: 'Clothing' },
      { name: 'Home Decor' },
    ];

    const createdCategories = await Category.insertMany(categories);

    // Create products
    const products = [
      {
        category: categories[0]._id,
        title: 'Smartphone',
        description: 'High-performance smartphone with advanced features.',
        image: 'smartphone.jpg',
        headline: 'Experience the future of communication.',
        createdBy: adminUser._id,
      },
      {
        category: categories[0]._id,
        title: 'Laptop',
        description: 'Powerful laptop for productivity and entertainment.',
        image: 'laptop.jpg',
        headline: 'Unleash your potential with our cutting-edge laptop.',
        createdBy: adminUser._id,
      },
      {
        category: categories[1]._id,
        title: 'T-Shirt',
        description: 'Comfortable and stylish t-shirt for everyday wear.',
        image: 'tshirt.jpg',
        headline: 'Stay trendy with our collection of t-shirts.',
        createdBy: adminUser._id,
      },
      {
        category: categories[1]._id,
        title: 'Jeans',
        description: 'Classic denim jeans for a timeless look.',
        image: 'jeans.jpg',
        headline: 'Get the perfect fit with our range of jeans.',
        createdBy: adminUser._id,
      },
      {
        category: categories[2]._id,
        title: 'Table Lamp',
        description: 'Elegant table lamp to illuminate your space.',
        image: 'tablelamp.jpg',
        headline: 'Add a touch of sophistication to your home decor.',
        createdBy: adminUser._id,
      },
      {
        category: categories[2]._id,
        title: 'Throw Pillow',
        description: 'Soft and decorative pillow for added comfort.',
        image: 'throwpillow.jpg',
        headline: 'Enhance the coziness of your living space.',
        createdBy: adminUser._id,
      },
    ];

    // Insert the data into the database
    await Product.insertMany(products);

    console.log('Seed data inserted successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Call the seedData function
seedData();
