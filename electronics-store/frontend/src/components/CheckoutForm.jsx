import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import '../styles/CheckoutForm.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      }
    );

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      setSucceeded(true);
      localStorage.removeItem('cart');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2 className="payment-title">Payment Details</h2>
      
      <div className="card-element-container">
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#171717',
                '::placeholder': {
                  color: '#a0aec0',
                },
              },
            },
          }}
        />
      </div>
      
      {error && <div className="payment-error">{error}</div>}
      
      <button 
        className="submit-button"
        disabled={processing || succeeded}
      >
        {processing ? 'Processing...' : succeeded ? 'Payment Successful!' : `Pay $${(total / 100).toFixed(2)}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
