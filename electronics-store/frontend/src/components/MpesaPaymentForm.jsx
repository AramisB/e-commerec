import { useState } from 'react';

const MpesaPaymentForm = ({ total, phoneNumber, onPhoneChange, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate M-Pesa payment processing
      const response = await fetch('/initiate-mpesa-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phoneNumber,
          amount: total
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Poll for payment completion
        const pollResult = await pollForPaymentStatus(data.transactionId);
        if (pollResult.paid) {
          onSuccess();
        } else {
          setError('Payment was not completed');
        }
      } else {
        setError(data.message || 'Payment failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const pollForPaymentStatus = async (transactionId) => {
    // Implement polling logic here
    return { paid: true }; // Simulated success
  };

  return (
    <form onSubmit={handleSubmit} className="mpesa-form">
      <div className="form-group">
        <label htmlFor="mpesa-phone">M-Pesa Phone Number</label>
        <input
          type="tel"
          id="mpesa-phone"
          value={phoneNumber}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="e.g. 254712345678"
          required
        />
      </div>

      <p className="mpesa-instructions">
        You will receive a payment request on your phone. Please enter your PIN to complete the transaction.
      </p>

      {error && <div className="error-message">{error}</div>}

      <button type="submit" disabled={isLoading || !phoneNumber}>
        {isLoading ? 'Processing...' : `Pay KES ${total.toFixed(2)}`}
      </button>
    </form>
  );
};

export default MpesaPaymentForm;
