// controllers/userController.js

const User = require('../models/userModel');

const isValidAge = (dateOfBirth) => {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  return age >= 18 && age <= 55;
};

const createUser = async (req, res) => {
  try {
    // Validate age
    if (!isValidAge(req.body.dateOfBirth)) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Age must be between 18 and 55. Please enter a valid age.',
      });
    }

    // Check if email or phone number already exists
    const existingUser = await User.findOne({
      $or: [
        { emailAddress: req.body.emailAddress },
        { contactNumber: req.body.contactNumber },
      ],
    });

    if (existingUser) {
      // User with the same email or phone number already exists
      return res.status(409).json({
        success: false,
        error: 'Conflict',
        message: 'User with the same email or phone number already exists',
      });
    }

    // Additional check for valid phone number format
    const isPhoneNumberValid = /^[0-9]{10}$/.test(req.body.contactNumber);
    if (!isPhoneNumberValid) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Invalid phone number format',
      });
    }

    // If no existing user and valid phone number format, create a new user
    const user = await User.create(req.body);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error('Error creating user:', error);

    if (error.name === 'ValidationError') {
      // Validation error
      res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: error.message,
      });
    } else {
      // Other errors
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Something went wrong. Please try again later.',
      });
    }
  }
};

module.exports = { createUser };
