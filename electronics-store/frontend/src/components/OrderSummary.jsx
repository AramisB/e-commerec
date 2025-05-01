import { Link } from 'react-router-dom';
import '../styles/OrderSummary.css';

const OrderSummary = ({ items, total, onDeleteItem }) => {
  return (
    <div className="order-summary">
      <h2 className="summary-title">Order Summary</h2>
      
      <div className="items-list">
        {items.map(item => (
          <div key={item.id} className="order-item">
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">× {item.quantity}</span>
            </div>
            <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
            <button 
              className="delete-item" 
              onClick={() => onDeleteItem(item.id)} // Trigger deletion on click
            >
              X
            </button>
          </div>
        ))}
      </div>
      
      <div className="order-totals">
        <div className="total-row">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="total-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="grand-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <Link to="/" className="continue-shopping">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSummary;
