// src/components/Home/ValueProposition.js
import React from 'react';
import giftImage from '../../assets/images/giftV.jpg';
import favoriteImage from '../../assets/images/favorite.jpg';
import './ValueProposition.css';

const ValueProposition = () => {
  return (
    <section className="value-proposition py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        {/* Step 1 */}
        <div>
          <img src={favoriteImage} alt="Gift" className="w-24 h-24 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-purple-700 mt-4">Step 1: You choose the gifts.</h2>
          <p className="text-gray-600 mt-2">
            Curate gift options based on the recipient's interests, ensuring a personalized experience.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <img src={giftImage} alt="Favorite" className="w-24 h-24 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-purple-700 mt-4">Step 2: They pick their favorite.</h2>
          <p className="text-gray-600 mt-2">
            The recipient selects their favorite gift from the curated options, making the experience enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;