// controllers/paymentController.js

const User = require('../models/userModel');
const Payment = require('../models/paymentModel');

const createPayment = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    // Validate if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'Not Found',
        message: 'User not found',
      });
    }

    // Create a new payment
    const payment = await Payment.create({
      user: user._id,
      amount,
    });

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    console.error('Error creating payment:', error);

    // Handle errors here
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
};

module.exports = { createPayment };
