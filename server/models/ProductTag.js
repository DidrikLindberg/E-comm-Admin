const mongoose = require('mongoose');

const productTagSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
    required: true,
  },
});

const ProductTag = mongoose.model('ProductTag', productTagSchema);

module.exports = ProductTag;
