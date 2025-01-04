// src/components/Home/HeroSection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import StorefrontIcon from './StorefrontIcon';
import GiftBagIcon from './GiftBagIcon';
import heroImage from '../../assets/images/SB.jpg';
import circularImage1 from '../../assets/images/circular-image-1.jpg';
import circularImage2 from '../../assets/images/circular-image-2.jpg';
import './HeroSection.css';

const HeroSection = () => {
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    console.log('Zip Code Input:', event.target.value); // Debug: Log zip code input
  };

  const handleButtonClick = () => {
    console.log('Button Clicked. Zip Code:', zipCode); // Debug: Log button click and zip code
    if (zipCode) {
      navigate(`/location/${zipCode}`);
    } else {
      console.log('Zip Code is empty. Please enter a valid zip code.'); // Debug: Log if zip code is empty
    }
  };

  return (
    <div className="bg-custom-green text-white py-16 px-8 grid grid-cols-2 items-center">
      {/* Left Column */}
      <div className="pl-16 space-y-4">
        <div className="flex items-center space-x-4 mb-4">
          <GiftBagIcon className="w-12 h-12" />
          <StorefrontIcon className="w-12 h-12" />
        </div>
        <h1 className="text-5xl font-bold">Gift thoughtfully. Shop locally.</h1>
        <p className="text-lg font-light">Find gifts everyone will love from businesses in your area.</p>
        <div className="flex items-center space-x-2 mt-6">
          <input
            type="text"
            placeholder="Enter city or zip code"
            className="px-4 py-2 rounded-l-lg border border-gray-300 text-black"
            value={zipCode}
            onChange={handleZipCodeChange}
          />
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-r-lg"
            onClick={handleButtonClick}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="relative">
        <img
          src={circularImage1}
          alt="Local Business Owner"
          className="absolute top-0 left-0 w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <img
          src={circularImage2}
          alt="Local Customer"
          className="absolute top-16 left-10 w-32 h-32 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;