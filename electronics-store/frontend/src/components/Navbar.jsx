import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">ElectroShop</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</Link>
            <Link to="/checkout" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 flex items-center">
              Cart
              {cartCount > 0 && (
                <span className="ml-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
