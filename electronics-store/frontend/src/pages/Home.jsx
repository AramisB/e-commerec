import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../products';
import '../styles/Home.css';

const Home = () => {
  const [category, setCategory] = useState('all');
  const categories = ['all', 'phones', 'tvs', 'audio', 'computers'];

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Deturo Tech</h1>
        <p className="hero-subtitle">Cutting-edge electronics for tech enthusiasts</p>
        <button className="hero-button">Explore Products</button>
      </section>

      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="category-title">Shop by Category</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`category-button ${
                category === cat ? 'category-button-active' : 'category-button-inactive'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
