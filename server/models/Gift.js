const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  giftPage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GiftPage'
  },
  name: {
    type: String,
    maxLength: 80
  },
  giftGiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PersonAccount'
  },
  giftRecipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PersonAccount'
  },
  giftTypesOffered: {
    type: [String]
  },
  giftNote: {
    type: String,
    maxLength: 32768
  },
  giftSelected: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing'
  },
  giftTypeSelected: {
    type: String
  },
  giftSelectedDate: {
    type: Date
  },
  giftStatus: {
    type: String
  },
  giftValue: {
    type: Number
  },
  pageSentDate: {
    type: Date
  },
  fulfilledBy: {
    type: String
  },
  fulfilledDate: {
    type: Date
  },
  canceledDate: {
    type: Date
  },
  cancellationReason: {
    type: String
  },
  contactlessDelivery: {
    type: Boolean
  }
  });

const Gift = mongoose.model('Gift', giftSchema);

module.exports = Gift;