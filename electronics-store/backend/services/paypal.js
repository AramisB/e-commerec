const paypal = require('@paypal/checkout-server-sdk');
const axios = require('axios');

// Set up PayPal environment
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

async function createOrder(amount) {
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: amount.toFixed(2)
      }
    }]
  });

  const response = await client.execute(request);
  return response.result;
}

async function captureOrder(orderID) {
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});
  const response = await client.execute(request);
  return response.result;
}

module.exports = {
  createOrder,
  captureOrder
};
