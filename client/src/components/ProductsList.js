import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const ProductsList = () => {
  // const userRole = Authservice.getUser.userRole();
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow-md rounded relative">
          (
            <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-700 font-bold">Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
