const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    references: {
      model: 'category',
      key: '_id'
    }
  },
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  description2: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  headline: {
    type: String,
    // required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
