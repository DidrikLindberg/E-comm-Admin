import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../utils/auth';

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container-fluid">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link to="/" className="navbar-brand">Your Logo</Link>
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
            {!isLoggedIn && (
              <Link to="/login" className="text-sm font-semibold leading-6">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
            {isLoggedIn && (
              <button
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 "
                onClick={handleLogout}
              >
                Log out
              </button>
            )}
          </div>
        </div>

        <button
          onClick={handleToggleCategories}
          className="lg:hidden inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className={`lg:hidden ${showCategories ? 'block' : 'hidden'}`}>
          <ul>
            {/* Categories list here */}
            <li>
              <Link to="/category/toys" className="block px-4 py-2 text-gray-800">Toys</Link>
            </li>
            <li>
              <Link to="/category/food" className="block px-4 py-2 text-gray-800">Food</Link>
            </li>
            <li>
              <Link to="/category/grooming" className="block px-4 py-2 text-gray-800">Grooming</Link>
            </li>
            {/* Add more categories */}
          </ul>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
          {/* Remaining code for login/logout */}
        </div>
      </div>
    </nav>
  );
}
