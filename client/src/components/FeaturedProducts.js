import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p className="text-center">Loading featured products...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  // Limit to the first three products
  const featuredProducts = data.products.slice(0, 3);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-blue-600">Featured Products</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="featuredProductCard w-full max-w-sm bg-white rounded-lg shadow-lg">
            <img className="featuredProductImage rounded-t-lg" src={product.image} alt={product.title} />
            <div className="featuredProductInfo">
              <h5 className="featuredProductTitle">{product.title}</h5>
              <div className="flex items-baseline justify-between">
                <span className="featuredProductPrice">${product.price}</span>
                <span className="text-xl font-normal text-gray-500">/one-time</span>
              </div>
              <p className="featuredProductDescription">{product.description}</p>
              <button type="button" className="buyNowButton">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;