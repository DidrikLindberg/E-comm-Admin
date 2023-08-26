import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const categories = ['Toys', 'Accessories', 'Apparel', 'Grooming'];

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleHideCategories = () => {
    setShowCategories(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 bg-gray-100 relative">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="navbar-brand">
            <FontAwesomeIcon icon={faPaw} className="text-4xl text-pink-500" />
          </Link>
          <div className="flex items-center space-x-16">
            <div
              className="relative group"
              onMouseEnter={handleToggleCategories}
              onMouseLeave={handleHideCategories}
            >
              <button className="text-gray-600 group-hover:text-blue-500">
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
            <Link to="/whatsnew" className="text-gray-600 hover:text-blue-500">
              What's New
            </Link>
            <Link to="/deals" className="text-gray-600 hover:text-blue-500">
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
            <Link to="/shoppingcart" className="text-gray-600">
              <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-blue-800" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
