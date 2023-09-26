import React from 'react';
import ProductsList from '../components/ProductsList';

const Shopping = () => {
  return (
    <div className="">
      <section className="bg-gray-100 py-20 mt-12">
        

        <h1 className="text-4xl text-center mb-4">
          Because Your Dog Deserves the Best
        </h1>
        <div className="flex justify-center mb-64">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full md:w-2/3 px-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        </section>
        <ProductsList />
      </div>
 
  );
};

export default Shopping;
