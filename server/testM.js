require('dotenv').config();
const mongoose = require('mongoose');

console.log('Trying to connect to:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB ✅'))
  .catch((err) => console.error('Connection error ❌', err));