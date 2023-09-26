import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useShoppingCart } from '../context/ShoppingCartContext'; // Import the useShoppingCart hook
import CartSidebar from './CartSidebar';

const categories = ['Toys', 'Accessories', 'Apparel', 'Grooming'];

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false); // State for cart sidebar visibility

  const { cart } = useShoppingCart();

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleHideCategories = () => {
    setShowCategories(false);
  };

  const toggleCartSidebar = () => {
    setShowCartSidebar(!showCartSidebar); // Toggle cart sidebar visibility
  };

  const handleHideCartSidebar = () => {
    setShowCartSidebar(false);
  };

  // Calculate the cart item count from the cart data
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-gray-900 py-3" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <div className="container">
        <div className="flex items-center justify-between w-full ml-8">
          <Link to="/" className="navbar-brand">
            <FontAwesomeIcon icon={faPaw} className="text-4xl text-pink-500" />
          </Link>
          <div className="flex items-center space-x-16">
            <div
              className="relative group"
              onMouseEnter={handleToggleCategories}
              onMouseLeave={handleHideCategories}
            >
              <button className="text-white group-hover:text-blue-500">
                Categories
              </button>
              {showCategories && (
                <div className="absolute top-full left-0 bg-gray-200 rounded-md p-2 space-y-2 mt-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-2 py-1 text-gray-600 rounded-md hover:bg-gray-300"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link to="/whatsnew" className="text-white hover:text-blue-500">
              What's New
            </Link>
            <Link to="/deals" className="text-white hover:text-blue-500">
              Deals
            </Link>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="px-4 py-2 text-gray-700 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex items-center">
            {/* Remove Link component and add onClick to toggle cart sidebar */}
            <div className="text-white cursor-pointer" onClick={toggleCartSidebar}>
              <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-white" />
              <div className="cart-badge">{cartItemCount}</div>
            </div>
          </div>
          {/* Render cart sidebar */}
          {showCartSidebar && <CartSidebar cart={cart} onClose={handleHideCartSidebar} />}
        </div>
      </div>
    </nav>
  );
}
