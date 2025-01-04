const mongoose = require('mongoose');

const GiftCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const GiftCard = mongoose.model('GiftCard', GiftCardSchema);

module.exports = GiftCard;