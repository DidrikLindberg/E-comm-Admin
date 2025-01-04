const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  person: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'PersonAccount' 
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'customer'],
    required: true,
  },
});

// Add a virtual `id` field that converts ObjectId to string
userSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are included in JSON output
userSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id.toHexString(); // Convert _id to id
    delete ret._id; // Remove _id from the response
    delete ret.__v; // Remove version key
    return ret;
  },
});

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
