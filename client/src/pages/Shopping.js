import React from 'react';
import ProductsList from '../components/ProductsList';

const Shopping = () => {
  return (
    <div className="container mx-auto py-8 px-12">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="flex justify-center">
        <ProductsList />
      </div>
    </div>
  );
};

export default Shopping;
