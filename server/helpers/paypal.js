const paypal = require("paypal-rest-sdk");
require("dotenv").config(); // ✅ Ensure this is included to load .env

paypal.configure({
  mode: 'sandbox', // ✅ 'sandbox' or 'live'
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;