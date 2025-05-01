import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="h-full flex flex-col">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
            loading="lazy"
          />
        </div>
        <div className="product-content">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price-container">
            <p className="product-price">${product.price}</p>
            {product.originalPrice && (
              <p className="product-original-price">${product.originalPrice}</p>
            )}
          </div>
          <p className="product-description">{product.description.substring(0, 60)}...</p>
          <div className="product-badge">
            {product.category}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
