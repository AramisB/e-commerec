const axios = require('axios');
const crypto = require('crypto');

// M-Pesa credentials from .env
const CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET;
const BUSINESS_SHORTCODE = process.env.MPESA_BUSINESS_SHORTCODE;
const PASSKEY = process.env.MPESA_PASSKEY;
const CALLBACK_URL = process.env.MPESA_CALLBACK_URL;

let accessToken = '';
let tokenExpiry = 0;

// Get OAuth token
async function getAuthToken() {
  if (Date.now() < tokenExpiry && accessToken) {
    return accessToken;
  }

  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
  const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });

  accessToken = response.data.access_token;
  tokenExpiry = Date.now() + (response.data.expires_in * 1000);
  return accessToken;
}

// Generate timestamp
function getTimestamp() {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
    String(now.getHours()).padStart(2, '0'),
    String(now.getMinutes()).padStart(2, '0'),
    String(now.getSeconds()).padStart(2, '0')
  ].join('');
}

// Generate password
function generatePassword() {
  const timestamp = getTimestamp();
  const password = Buffer.from(`${BUSINESS_SHORTCODE}${PASSKEY}${timestamp}`).toString('base64');
  return password;
}

// Initiate STK push
async function initiateSTKPush(phone, amount) {
  const token = await getAuthToken();
  const timestamp = getTimestamp();
  const password = generatePassword();

  const response = await axios.post(
    'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    {
      BusinessShortCode: BUSINESS_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone,
      PartyB: BUSINESS_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: CALLBACK_URL,
      AccountReference: 'ElectroShop',
      TransactionDesc: 'Electronics Purchase'
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
}

module.exports = {
  initiateSTKPush
};
