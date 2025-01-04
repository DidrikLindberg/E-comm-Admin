import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="hero-section">
      <h1>Gift thoughtfully. Shop locally.</h1>
      <p>Find gifts everyone will love from businesses in your area.</p>
      <div className="zip-input-container">
        <input
          type="text"
          value={zipCode}
          onChange={handleZipCodeChange}
          placeholder="Enter Zip Code"
          className="zip-input"
        />
        <button
          onClick={handleButtonClick}
          className="find-stores-button"
        >
          Find Local Stores
        </button>
      </div>
    </div>
  );
};

export default HeroSection;