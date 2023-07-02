// const mongoose = require('mongoose');
// const { Admin } = require('./models/Admin');

// mongoose.connect('mongodb://localhost/ecomdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Seed admin user
// const seedAdmin = async () => {
//   try {
//     const admin = new Admin({
//       username: 'admin',
//       password: 'adminpassword',
//     });

//     await admin.save();
//     console.log('Admin user seeded successfully');
//   } catch (error) {
//     console.error('Error seeding admin user:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// // Run the seed function
// seedAdmin();
