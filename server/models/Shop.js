// server/models/Shop.js
const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageURL: {
    type: String,
    required: false,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;