const express = require('express');
const router = express.Router();
const {
  createStripePayment,
  createPayPalOrder,
  capturePayPalOrder,
  initiateMpesaPayment
} = require('../services/payments');

// Stripe Payment Intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { items } = req.body;
    const paymentIntent = await createStripePayment(items);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PayPal Order
router.post('/create-paypal-order', async (req, res) => {
  try {
    const { amount } = req.body;
    const order = await createPayPalOrder(amount);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PayPal Capture
router.post('/capture-paypal-order', async (req, res) => {
  try {
    const { orderID } = req.body;
    const captureData = await capturePayPalOrder(orderID);
    res.json(captureData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// M-Pesa Payment
router.post('/initiate-mpesa-payment', async (req, res) => {
  try {
    const { phone, amount } = req.body;
    const response = await initiateMpesaPayment(phone, amount);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
