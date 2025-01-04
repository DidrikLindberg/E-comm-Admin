import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-black bg-opacity-50 py-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Section: Newsletter and Social Media */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white">Newsletters for local everywhere.</h2>
        <div className="flex items-center border-b border-gray-300 text-white">
          <input
            type="email"
            placeholder="Your email"
            className="bg-transparent w-full py-2 px-4 focus:outline-none"
          />
          <button className="text-white ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Section: Navigation Links */}
      <div className="grid grid-cols-2 gap-4 text-right">
        <div>
          <a href="/home" className="text-sm text-white hover:text-gray-400">Home</a>
          <br />
          <a href="/about" className="text-sm text-white hover:text-gray-400">About</a>
          <br />
          <a href="/link" className="text-sm text-white hover:text-gray-400">Link</a>
        </div>
        <div>
          <a href="/send-gift" className="text-sm text-white hover:text-gray-400">Send Gift</a>
          <br />
          <a href="/testimonials" className="text-sm text-white hover:text-gray-400">Testimonials</a>
          <br />
          <a href="/link" className="text-sm text-white hover:text-gray-400">Link</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;