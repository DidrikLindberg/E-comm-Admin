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
      { name: 'Toys' },
      { name: 'Food and Treats' },
      { name: 'Grooming' },
      { name: 'Bedding' },
      { name: 'Apparel' },
    ];
    const createdCategories = await Category.insertMany(categories);

    // Create products
    const products = [
      {
        category: categories[0]._id,
        title: 'Interactive Chew Toy',
        description: 'Durable toy for interactive play and chewing.',
        image: '../assets/images/Interactive Chew Toy.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[1]._id,
        title: 'Grain-Free Dog Treats',
        description: 'Delicious treats made with natural ingredients.',
        image: 'dog-treats.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[2]._id,
        title: 'Self-Cleaning Slicker Brush',
        description: 'Gentle brush that removes tangles and loose fur.',
        image: 'slicker-brush.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[3]._id,
        title: 'Orthopedic Dog Bed',
        description: 'Premium bed for comfort and joint support.',
        image: 'dog-bed.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[4]._id,
        title: 'Waterproof Dog Raincoat',
        description: 'Protective raincoat for walks in wet weather.',
        image: 'dog-raincoat.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[0]._id,
        title: 'Fetch Ball Set',
        description: 'Colorful balls for a game of fetch in the park.',
        image: 'fetch-balls.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[1]._id,
        title: 'Natural Dog Biscuits',
        description: 'Wholesome biscuits made from real ingredients.',
        image: 'dog-biscuits.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[2]._id,
        title: 'Dog Shampoo',
        description: 'Gentle shampoo that keeps your dogs coat clean and shiny.',
        image: 'dog-shampoo.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[3]._id,
        title: 'Cozy Dog Blanket',
        description: 'Soft blanket to keep your furry friend warm and snug.',
        image: 'dog-blanket.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[4]._id,
        title: 'Dog Sunglasses',
        description: 'Stylish sunglasses to protect your dogs eyes from the sun.',
        image: 'dog-sunglasses.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[0]._id,
        title: 'Squeaky Plush Toy Set',
        description: 'Plush toys with squeakers for hours of fun.',
        image: 'plush-toys.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[1]._id,
        title: 'Organic Dog Food',
        description: 'Organic and nutritious dog food for a balanced diet.',
        image: 'organic-dog-food.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[2]._id,
        title: 'Dog Nail Clippers',
        description: 'Safe clippers for trimming your dog\'s nails.',
        image: 'dog-nail-clippers.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[3]._id,
        title: 'Elevated Dog Cot',
        description: 'Elevated cot for comfortable rest indoors or outdoors.',
        image: 'dog-cot.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[4]._id,
        title: 'Dog Bowtie Collar',
        description: 'Stylish collar with a detachable bowtie accessory.',
        image: '../assets/images/Dog Bowtie Collar.jpg',
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
