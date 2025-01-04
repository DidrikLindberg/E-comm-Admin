import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';

const ProductDetail = () => {
  const { id } = useParams();
  console.log('ProductDetail component rendered'); // Log when the component renders
  console.log('Product ID from URL:', id); // Log the product ID

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId: id },
  });

  // Log loading state
  if (loading) {
    console.log('Loading product data...'); // Log when loading
    return <p>Loading...</p>;
  }

  // Log error state
  if (error) {
    console.error('Error fetching product:', error); // Log the error
    return <p>Error: {error.message}</p>;
  }

  // Log the entire data object to the console
  console.log('Product data received:', data);

  // Check if product data is available
  if (!data || !data.product) {
    console.warn('No product data found'); // Log if no product data is found
    return <p>No product found.</p>;
  }

  const { title, price, description, description2, image } = data.product;

  // Log the product details
  console.log('Product details:', {
    title,
    price,
    description,
    description2,
    image,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <img src={image} alt={title} className="w-full h-auto" />
      <p className="mt-4">{description}</p>
      <p className="mt-4 font-italic">{description2}</p> {/* Render description2 here */}
      <div className="mt-4">
        <span className="text-2xl font-bold">${price}</span>
        <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;