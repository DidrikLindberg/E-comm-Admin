const mongoose = require('mongoose');

const giftPageSchema = new mongoose.Schema({
  brand: {
    type: String
  },
  configurationType: {
    type: String
  },
  name: {
    type: String,
    maxLength: 80
  },
  giftPageType: {
    type: String
  },
  url: {
    type: String,
    maxLength: 255
  },
  status: {
    type: String
  }
});

const GiftPage = mongoose.model('GiftPage', giftPageSchema);

module.exports = GiftPage;