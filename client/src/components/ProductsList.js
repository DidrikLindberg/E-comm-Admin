import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import productimg from '../assets/images/Organic Dog Food.png';
import BlackCanopy from '../assets/images/Dog Bowtie Collar.jpg';
import WhitePartyTent from '../assets/images/Elevated Dog Cot.jpg';

const CategoriesSidebar = () => {
  // Simulated categories, replace with actual categories
  const categories = ['Toys', 'Accessories', 'Apparel', 'Grooming'];

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-3">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            className="text-gray-600 hover:text-blue-500 cursor-pointer transition-colors"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductCard = ({ product }) => (
  <div className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-between transition-transform hover:scale-105">
    <div>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-gray-700 font-semibold">${product.price}</span>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
        <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
        Add to Cart
      </button>
    </div>
  </div>
);

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div className="container mx-auto px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <CategoriesSidebar />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
