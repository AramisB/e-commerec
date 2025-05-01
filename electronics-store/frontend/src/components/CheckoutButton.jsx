import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import '../styles/Checkout.css';

const stripePromise = loadStripe('your_publishable_key_here');

const CheckoutButton = ({ cartItems }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
    const stripe = await stripePromise;
    
    const response = await fetch('http://your-backend-url/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cartItems,
      }),
    });
    
    const session = await response.json();
    
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    
    if (result.error) {
      console.error(result.error);
    }
    
    setLoading(false);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading || cartItems.length === 0}
      className={`bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition duration-300 ${loading ? 'opacity-50' : ''}`}
    >
      {loading ? 'Processing...' : 'Pay with Stripe'}
    </button>
  );
};

export default CheckoutButton;
