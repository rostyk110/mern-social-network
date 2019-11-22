const mongoose = require('mongoose');

// Create Schema
const UserScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserScheme);
