const PaymentMethodSelector = ({ selectedMethod, onChange }) => {
    return (
      <div className="payment-method-selector">
        <h3 className="payment-method-title">Select Payment Method</h3>
        <div className="payment-method-options">
          <label className={`payment-method-option ${selectedMethod === 'card' ? 'active' : ''}`}>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={selectedMethod === 'card'}
              onChange={() => onChange('card')}
            />
            <span>Credit/Debit Card</span>
            <div className="payment-icons">
              <img src="/payment-icons/visa.png" alt="Visa" />
              <img src="/payment-icons/mastercard.png" alt="Mastercard" />
            </div>
          </label>
  
          <label className={`payment-method-option ${selectedMethod === 'paypal' ? 'active' : ''}`}>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={selectedMethod === 'paypal'}
              onChange={() => onChange('paypal')}
            />
            <span>PayPal</span>
            <img src="/payment-icons/paypal.png" alt="PayPal" className="paypal-icon" />
          </label>
  
          <label className={`payment-method-option ${selectedMethod === 'mpesa' ? 'active' : ''}`}>
            <input
              type="radio"
              name="paymentMethod"
              value="mpesa"
              checked={selectedMethod === 'mpesa'}
              onChange={() => onChange('mpesa')}
            />
            <span>M-Pesa</span>
            <img src="/payment-icons/mpesa.png" alt="M-Pesa" className="mpesa-icon" />
          </label>
        </div>
      </div>
    );
  };
  
  export default PaymentMethodSelector;
