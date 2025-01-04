const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  availableGiftTypes: {
    type: [String]
  },
  brandAvailability: {
    type: [String]
  },
  localMarket: {
    type: String
  },
  name: {
    type: String,
    maxLength: 80
  },
  description: {
    type: String,
    maxLength: 255
  },
  type: {
    type: String
  },
  url: {
    type: String,
    maxLength: 255
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  minGiftAmount: {
    type: Number
  },
  maxGiftAmount: {
    type: Number
  },
  shopConsent: {
    type: String
  }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;