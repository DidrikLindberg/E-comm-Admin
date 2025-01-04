import React, { useRef } from 'react';
import './GiftCardCarousel.css';

const GiftCardCarousel = ({ cards }) => {
  const carouselRef = useRef(null);
  const cardWidth = 300; // Adjust based on your card size

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="flex overflow-hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 py-6 scrollbar-hide" ref={carouselRef}>
          {cards.map((card) => (
            <div key={card.id} className="flex-shrink-0 w-60 rounded-lg overflow-hidden shadow-lg">
              <img src={card.image} alt={card.businessName} className="w-full h-48 object-cover" />
              <p className="mt-2 text-center text-white">{card.businessName}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
      >
        &gt;
      </button>
    </div>
  );
};

export default GiftCardCarousel;