const mongoose = require('mongoose');

const giftPageElementSchema = new mongoose.Schema({
  giftPage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GiftPage'
  },
  name: {
    type: String,
    maxLength: 80
  },
  category: {
    type: String
  },
  subCategory: {
    type: String,
    maxLength: 80
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing'
  },
  giftTypesOffered: {
    type: [String]
  },
  status: {
    type: String
  },
  description: { 
    type: String 
  },
  listingUrl: { 
    type: String 
  },
  listingType: {
     type: String
     },
  shopName: { 
    type: String 
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
  phone: { 
    type: String 
  },
  email: { 
    type: String 
  },
});

const GiftPageElement = mongoose.model('GiftPageElement', giftPageElementSchema);

module.exports = GiftPageElement;