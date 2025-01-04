import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../utils/queries';
import ProductCard from '../../components/ProductCard';
import { useShoppingCart } from '../../context/ShoppingCartContext';

const Shopping = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const { addToCart } = useShoppingCart(); // Get addToCart function from context

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6">Shop Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <ProductCard 
            key={product._id} 
            product={product} 
            addToCart={addToCart} // Pass addToCart to ProductCard
          />
        ))}
      </div>
    </div>
  );
};

export default Shopping;