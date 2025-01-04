const mongoose = require('mongoose');

const personAccountSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
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
  }
});

// Add a virtual `id` field that converts ObjectId to string
personAccountSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

personAccountSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id.toHexString(); // Convert _id to id
    delete ret._id; // Remove _id from the response
    delete ret.__v; // Remove version key
    return ret;
  },
});

const PersonAccount = mongoose.model('PersonAccount', personAccountSchema);

module.exports = PersonAccount;