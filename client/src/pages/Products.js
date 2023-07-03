import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries'; // Replace with the actual query for fetching products


const Products = () => {
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log('data:', data);

  useEffect(() => {
    console.log('useEffect - data:', data);
    if (data && data.products) {
      console.log('Setting products:', data.products);
      setProducts(data.products);
    }
  }, [data]);

  console.log('loading:', loading);
  console.log('error:', error);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
