import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentMethodSelector from '../components/PaymentMethodSelector';
import StripePaymentForm from '../components/StripePaymentForm';
import MpesaPaymentForm from '../components/MpesaPaymentForm';
import OrderSummary from '../components/OrderSummary';
import '../styles/Checkout.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [clientSecret, setClientSecret] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('card');

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
    calculateTotal(cart);
    
    if (selectedMethod === 'card') {
      fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [selectedMethod]);

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(sum);
  };

  const handleDeleteItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);  // Recalculate total
  };

  const handlePaymentSuccess = () => {
    localStorage.removeItem('cart');
    // Redirect to success page or show success message
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-header">Secure Checkout</h1>
      
      <div className="checkout-layout">
        <div className="payment-section">
          <PaymentMethodSelector 
            selectedMethod={selectedMethod}
            onChange={setSelectedMethod}
          />

          {selectedMethod === 'card' && clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <StripePaymentForm 
                total={total} 
                onSuccess={handlePaymentSuccess} 
              />
            </Elements>
          )}

          {selectedMethod === 'mpesa' && (
            <MpesaPaymentForm 
              total={total}
              onSuccess={handlePaymentSuccess}
            />
          )}
        </div>
        
        <OrderSummary 
          items={cartItems} 
          total={total} 
          onDeleteItem={handleDeleteItem} // Pass the delete function
        />
      </div>
    </div>
  );
};

export default Checkout;
