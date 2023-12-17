// models/userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (value) {
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: 'Invalid email address',
    },
  },
  address: {
    type: String,
    required: true,
  },
  preferredBatch: {
    type: String,
    enum: ['6-7AM', '7-8AM', '8-9AM', '5-6PM'],
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
