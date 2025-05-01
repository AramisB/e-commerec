import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const StripePaymentForm = ({ total, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

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
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
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
        disabled={processing}
      >
        {processing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
      </button>
    </form>
  );
};

export default StripePaymentForm;
