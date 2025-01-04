import React from 'react';
import GiftCardCarousel from './GiftCardCarousel'; // Adjust the import path as necessary
import './GiftSection.css';

const giftCards = [
  { id: 1, image: require('../../assets/images/honey.jpg'), businessName: 'Honey Haven' },
  { id: 2, image: require('../../assets/images/donuts.jpg'), businessName: 'Donut Delight' },
  { id: 3, image: require('../../assets/images/cheese.jpg'), businessName: 'Cheese Corner' },
  { id: 4, image: require('../../assets/images/honey.jpg'), businessName: 'Honey Haven' },
  { id: 5, image: require('../../assets/images/donuts.jpg'), businessName: 'Donut Delight' },
];

const GiftSection = () => {
  return (
    <section className="bg-custom-green text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Your Hunt for the Perfect Gift Ends Here
      </h2>

      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-4">
          {/* Dropdown 1 */}
          <div className="relative">
            <select className="custom-dropdown">
              <option value="Foodies">Foodies</option>
              <option value="Adventures">Adventures</option>
              <option value="Wellness">Wellness</option>
            </select>
            <span className="dropdown-arrow">▼</span>
          </div>

          <span className="text-gray-400">in</span>

          {/* Dropdown 2 */}
          <div className="relative">
            <select className="custom-dropdown">
              <option value="Santa Barbara">Santa Barbara</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="San Diego">San Diego</option>
            </select>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
      </div>

      <GiftCardCarousel cards={giftCards} />

      <div className="text-center mt-8">
        <p className="italic text-lg">"I created this for a friend who loves to take a spa day."</p>
        <p className="text-sm text-gray-400 mt-2">-- Stephanie, Santa Barbara.</p>
      </div>

      <div className="text-center mt-6">
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200">
          View Gift Page
        </button>
      </div>
    </section>
  );
};

export default GiftSection;