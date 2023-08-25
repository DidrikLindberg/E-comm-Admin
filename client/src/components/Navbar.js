import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const isLoggedIn = AuthService.loggedIn();
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 bg-gray-100">
    <div className="container-fluid">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faPaw} className="text-6xl pl-6 text-pink-500" />
          </Link>
        </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search for products..."
              style={{ width: '400px' }}
              className="px-4 py-2 text-gray-700 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex items-center">
            {/* Shopping cart icon linking to shopping cart page */}
            <Link to="/shoppingcart" className="ml-4 text-xl text-gray-700">
            <FontAwesomeIcon icon={faShoppingCart} className="text-4xl pl-6 text-blue-800" />
            </Link>
          </div>




      </div>
    </div>
    </nav>
  );
}
