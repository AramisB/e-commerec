const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createPaymentIntent(amount) {
  return await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });
}

module.exports = {
  createPaymentIntent
};
