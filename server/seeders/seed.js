// server/seeders/seed.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Location, Category, Shop, Product, User, FeaturedShop, Account, Listing, GiftPage, GiftPageElement, Gift, PersonAccount } = require('../models');
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
    await FeaturedShop.deleteMany({});
    await Account.deleteMany({});
    await Listing.deleteMany({});
    await GiftPage.deleteMany({});
    await GiftPageElement.deleteMany({});
    await Gift.deleteMany({});
    await PersonAccount.deleteMany({});

// Seed PersonAccount first
const personAccounts = await PersonAccount.insertMany([
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    billingStreet: '123 Main St',
    billingCity: 'Anytown',
    billingState: 'CA',
    billingZip: '12345',
    billingCountry: 'USA',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '555-555-5555',
    billingStreet: '456 Elm St',
    billingCity: 'Othertown',
    billingState: 'NY',
    billingZip: '67890',
    billingCountry: 'USA',
  },
]);

// Seed Accounts
// const accounts = await Account.insertMany([
//   {
//     name: 'Account 1',
//     description: 'This is account 1',
//     billingStreet: '123 Main St',
//     billingCity: 'Anytown',
//     billingState: 'CA',
//     billingZip: '12345',
//     billingCountry: 'USA',
//     website: 'https://example.com',
//     phone: '555-555-5555',
//     email: 'account1@example.com',
//     instagram: 'https://instagram.com/account1',
//   },
//   {
//     name: 'Account 2',
//     description: 'This is account 2',
//     billingStreet: '456 Elm St',
//     billingCity: 'Othertown',
//     billingState: 'NY',
//     billingZip: '67890',
//     billingCountry: 'USA',
//     website: 'https://example.com',
//     phone: '555-555-5555',
//     email: 'account2@example.com',
//     instagram: 'https://instagram.com/account2',
//   },
// ]);


// // Seed Listings
// const listings = await Listing.insertMany([
//   {
//     name: 'Listing 1',
//     account: accounts[0]._id,
//     description: 'This is listing 1',
//     type: 'Product',
//     availableGiftTypes: ['Gift Card', 'Physical Product'],
//     brandAvailability: ['Brand 1', 'Brand 2'],
//     localMarket: 'Anytown',
//     startDate: new Date('2022-01-01'),
//     endDate: new Date('2022-12-31'),
//     minGiftAmount: 10.0,
//     maxGiftAmount: 100.0,
//     shopConsent: 'Yes',
//   },
//   {
//     name: 'Listing 2',
//     account: accounts[1]._id,
//     description: 'This is listing 2',
//     type: 'Service',
//     availableGiftTypes: ['Gift Card', 'Experience'],
//     brandAvailability: ['Brand 3', 'Brand 4'],
//     localMarket: 'Othertown',
//     startDate: new Date('2022-01-01'),
//     endDate: new Date('2022-12-31'),
//     minGiftAmount: 20.0,
//     maxGiftAmount: 200.0,
//     shopConsent: 'Yes',
//   },
// ]);

   // Create an account
   const account1 = new Account({
    name: 'Account 1',
    billingZip: '90210',
    billingCity: 'Los Angeles'
  });

  // Save the account
  await account1.save();
  console.log('Account created and saved.');

  // Create a listing for the account
  const listing1 = new Listing({
    account: account1._id, // Reference to Account 1
    availableGiftTypes: ['Type A', 'Type B'],
    brandAvailability: ['Brand X', 'Brand Y'],
    localMarket: 'Anytown',
    name: 'Listing 1',
    description: 'This is listing 1',
    type: 'Product',
    startDate: new Date('2022-01-01T00:00:00.000Z'),
    endDate: new Date('2022-12-31T00:00:00.000Z'),
    minGiftAmount: 10,
    maxGiftAmount: 100,
    shopConsent: 'Yes',
  });

  // Save the listing
  await listing1.save();
  console.log('Listing created and saved.');

  // Update the account with the listing
  account1.listings.push(listing1._id);

  await account1.save();
  console.log('Listing associated with the account.');

  // Create another listing for the same account
  const listing2 = new Listing({
    account: account1._id, // Reference to Account 1
    availableGiftTypes: ['Type C', 'Type D'],
    brandAvailability: ['Brand Z'],
    localMarket: 'Othertown',
    name: 'Listing 2',
    description: 'This is listing 2',
    type: 'Service',
    startDate: new Date('2023-01-01T00:00:00.000Z'),
    endDate: new Date('2023-12-31T00:00:00.000Z'),
    minGiftAmount: 20,
    maxGiftAmount: 200,
    shopConsent: 'Yes',
  });

  // Save the second listing
  await listing2.save();
  console.log('Second listing created and saved.');

  // Update the account with the second listing
  account1.listings.push(listing2._id);

  await account1.save();
  console.log('Second listing associated with the account.');


// Seed GiftPages
const giftPages = await GiftPage.insertMany([
  {
    brand: 'Brand 1',
    configurationType: 'Standard',
    name: 'Gift Page 1',
    giftPageType: 'Product',
    url: 'https://example.com/gift-page-1',
    status: 'Active',
  },
  {
    brand: 'Brand 2',
    configurationType: 'Custom',
    name: 'Gift Page 2',
    giftPageType: 'Service',
    url: 'https://example.com/gift-page-2',
    status: 'Active',
  },
]);

// Seed Gifts
const gifts = await Gift.insertMany([
  {
    giftPage: giftPages[0]._id, // Use ObjectId
    name: 'Gift 1',
    giftGiver: personAccounts[0]._id, // Use ObjectId
    giftRecipient: personAccounts[1]._id, // Use ObjectId
    message: 'Happy Birthday!',
    amount: 50.00,
    status: 'Sent',
  },
  {
    giftPage: giftPages[1]._id, // Use ObjectId
    name: 'Gift 2',
    giftGiver: personAccounts[1]._id, // Use ObjectId
    giftRecipient: personAccounts[0]._id, // Use ObjectId
    message: 'Congratulations!',
    amount: 100.00,
    status: 'Sent',
  },
]);

    // Seed users
    const users = await User.insertMany([
      {
        username: 'user1',
        password: await bcrypt.hash('password1', 10),
        email: 'user1@example.com',
        role: 'admin',
      },
      {
        username: 'user2',
        password: await bcrypt.hash('password2', 10),
        email: 'user2@example.com',
        role: 'customer',
      },
    ]);

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();