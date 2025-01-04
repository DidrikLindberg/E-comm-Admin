// Carousel.js
import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap'; // Using React Bootstrap for carousel
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component

const Carousel = ({ products }) => {
  return (
    <BootstrapCarousel>
      {products.map((product, index) => (
        <BootstrapCarousel.Item key={product._id}>
          <div className="carousel-item-content">
            <ProductCard product={product} />
          </div>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default Carousel;