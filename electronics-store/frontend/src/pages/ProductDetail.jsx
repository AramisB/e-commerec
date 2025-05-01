import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  if (!product) return <div className="loading-spinner">Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-layout">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          
          <div className="quantity-selector">
            <label className="quantity-label">Quantity:</label>
            <input 
              type="number" 
              min="1" 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="quantity-input"
            />
          </div>
          
          <button 
            onClick={addToCart}
            className="add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
