const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

const BASE_URL = process.env.BASE_URL || 

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Connect to the database
connectDB();

// Routes
const userRoutes = require('./src/routes/userRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');

app.use('/api/user', userRoutes);
app.use('/api/payment', paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
