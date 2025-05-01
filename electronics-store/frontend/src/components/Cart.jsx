import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../products';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0); // Track the number of items in the cart

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
    calculateTotal(cart);
    calculateCartCount(cart);  // Initialize cart count on component mount
  }, []);

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(sum);
  };

  const calculateCartCount = (items) => {
    const count = items.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);  // Update the cart count state
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    calculateCartCount(updatedCart);  // Update cart count after quantity change
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    calculateCartCount(updatedCart);  // Update cart count after item removal

    // If the cart is empty, ensure to reset cart count to 0 in the global state or context
    if (updatedCart.length === 0) {
      setCartCount(0);
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p className="empty-cart-text">Your cart is empty</p>
          <Link to="/" className="shopping-link">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-container">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image-container">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-input">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="remove-item-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-total">
              <div className="summary-row font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link 
              to="/checkout" 
              className="checkout-btn"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
