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

    const s3BaseUrl = 'https://ecomadmin1bucket.s3.us-west-1.amazonaws.com/';


    // Create products
    const products = [
      {
        category: categories[0]._id,
        title: 'Interactive Chew Toy',
        description: 'Durable toy for interactive play and chewing.',
        image: s3BaseUrl + 'interactive-chew-toy.png',
        createdBy: adminUser._id,
      },
      {
        category: categories[1]._id,
        title: 'Grain-Free Dog Treats',
        description: 'Delicious treats made with natural ingredients.',
        image: s3BaseUrl + 'grain-free-treat.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[2]._id,
        title: 'Self-Cleaning Slicker Brush',
        description: 'Gentle brush that removes tangles and loose fur.',
        image: s3BaseUrl +  'self-cleaning-brush.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[3]._id,
        title: 'Orthopedic Dog Bed',
        description: 'Premium bed for comfort and joint support.',
        image: s3BaseUrl + 'orthopedic-dog-bed.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[4]._id,
        title: 'Waterproof Dog Raincoat',
        description: 'Protective raincoat for walks in wet weather.',
        image: s3BaseUrl + 'Waterproof Dog Raincoat.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[0]._id,
        title: 'Fetch Ball Set',
        description: 'Colorful balls for a game of fetch in the park.',
        image: s3BaseUrl + 'Fetch Ball Set.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[1]._id,
        title: 'Natural Dog Biscuits',
        description: 'Wholesome biscuits made from real ingredients.',
        image: s3BaseUrl + 'Natural Dog Biscuits.jpeg',
        createdBy: adminUser._id,
      },
      {
        category: categories[2]._id,
        title: 'Dog Shampoo',
        description: 'Gentle shampoo that keeps your dogs coat clean and shiny.',
        image: s3BaseUrl + 'Dog Shampoo.jpeg',
        createdBy: adminUser._id,
      },
      {
        category: categories[3]._id,
        title: 'Cozy Dog Blanket',
        description: 'Soft blanket to keep your furry friend warm and snug.',
        image: s3BaseUrl +  'Cozy Dog Blanket.png',
        createdBy: adminUser._id,
      },
      {
        category: categories[4]._id,
        title: 'Dog Sunglasses',
        description: 'Stylish sunglasses to protect your dogs eyes from the sun.',
        image: s3BaseUrl +  'Dog Sunglasses.png',
        createdBy: adminUser._id,
      },
      {
        category: categories[0]._id,
        title: 'Squeaky Plush Toy Set',
        description: 'Plush toys with squeakers for hours of fun.',
        image: s3BaseUrl +  'Squeaky Plush Toy Set.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[1]._id,
        title: 'Organic Dog Food',
        description: 'Organic and nutritious dog food for a balanced diet.',
        image: s3BaseUrl +  'Organic Dog Food.png',
        createdBy: adminUser._id,
      },
      {
        category: categories[2]._id,
        title: 'Dog Nail Clippers',
        description: 'Safe clippers for trimming your dog\'s nails.',
        image: s3BaseUrl + 'Dog Nail Clippers.png',
        createdBy: adminUser._id,
      },
      {
        category: categories[3]._id,
        title: 'Elevated Dog Cot',
        description: 'Elevated cot for comfortable rest indoors or outdoors.',
        image: s3BaseUrl +  'Elevated Dog Cot.jpg',
        createdBy: adminUser._id,
      },
      {
        category: categories[4]._id,
        title: 'Dog Bowtie Collar',
        description: 'Stylish collar with a detachable bowtie accessory.',
        image: s3BaseUrl + 'Dog Bowtie Collar.jpg',
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
