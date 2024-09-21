require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const details = {
      dbName: process.env.DB,
      user: process.env.USER,
      pass: process.env.PASS,
      authSource: process.env.DB
    }
    await mongoose.connect('mongodb://localhost:27017', details);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;