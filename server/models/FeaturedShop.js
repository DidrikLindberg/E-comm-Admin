// server/models/FeaturedShop.js
const mongoose = require('mongoose');

const featuredShopSchema = new mongoose.Schema({
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop', // Reference to the Shop model
    required: true,
  },
  featuredDate: {
    type: Date,
    default: Date.now, // Date when the shop was featured
  },
  // Additional fields can be added as needed
});

// Create the FeaturedShop model
const FeaturedShop = mongoose.model('FeaturedShop', featuredShopSchema);

module.exports = FeaturedShop;