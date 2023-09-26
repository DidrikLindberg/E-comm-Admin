import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Link to={`/product/${product._id}`} className="block no-underline">
    <div className="bg-white rounded-lg overflow-hidden w-80 h-106"> {/* Adjust width and height here */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover cursor-pointer"
      />
      <div className="p-4"> {/* No fixed height */}
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-semibold text-lg">${product.price}</span>
        </div>
      </div>
    </div>
  </Link>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ml-16">
      {products.map((product) => (
        <div key={product._id} className="mb-4"> {/* Added margin-bottom */}
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
