// config/database.js
require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log('Connected to the database');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
