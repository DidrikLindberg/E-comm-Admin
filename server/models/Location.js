const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location; // Ensure this is exported correctly