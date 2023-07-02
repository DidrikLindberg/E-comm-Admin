// const mongoose = require('mongoose');
// const { Customer } = require('./models/Customer');

// mongoose.connect('mongodb://localhost/ecomdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Seed customer user
// const seedCustomer = async () => {
//   try {
//     const customer = new Customer({
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       address: '123 Main St, City, State',
//       phone: '123-456-7890',
//     });

//     await customer.save();
//     console.log('Customer user seeded successfully');
//   } catch (error) {
//     console.error('Error seeding customer user:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// // Run the seed function
// seedCustomer();
