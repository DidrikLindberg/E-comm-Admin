const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 80
  },
  billingStreet: {
    type: String
  },
  billingCity: {
    type: String
  },
  billingState: {
    type: String
  },
  billingZip: {
    type: String
  },
  billingCountry: {
    type: String
  },
  description: {
    type: String,
    maxLength: 32000
  },
  website: {
    type: String,
    maxLength: 255
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    maxLength: 255
  },
  instagram: {
    type: String,
    maxLength: 255
  },
  listings: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Listing' }], // Reference to Listing model
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;