// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'; // Ensure you have this icon imported

const Navbar = () => {
  return (
    <nav className="bg-custom-green text-white py-4 px-8 flex justify-between items-center">
      {/* Left Section: Navigation Links */}
      <div className="flex space-x-8">
        <Link to="/how-it-works" className="text-sm font-medium hover:text-gray-300">
          How It Works
        </Link>
        <Link to="/our-partners" className="text-sm font-medium hover:text-gray-300">
          Our Partners
        </Link>
      </div>

      {/* Center Section: Logo */}
      <div className="text-lg font-bold text-white">
        LOCAL GIFT
      </div>

      {/* Right Section: Call-to-Action */}
      <div className="flex items-center space-x-2">
        <Link to="/send-gift" className="text-sm font-medium hover:text-gray-300">
          Send a Gift
        </Link>
        <FontAwesomeIcon icon={faShoppingBag} className="w-5 h-5 text-white" />
      </div>
    </nav>
  );
};

export default Navbar;