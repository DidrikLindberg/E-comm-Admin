import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Product = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId: id },
  });

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleAddToCart = () => {
    if (loading || error) {
      return;
    }
  
    const product = data.product;
  
    // Logging for debugging
    console.log('Product:', product);
    
    // Make sure you pass an object with the correct structure
    const cartItem = {
      product: {
        id: product._id,
        title: product.title,
        // Add other properties if needed
      },
      quantity,
    };
  
    // Logging for debugging
    console.log('CartItem:', cartItem);
  
    // Use the addToCart function from the shopping cart context
    addToCart(cartItem);
  
    // Display a notification when the product is added to the cart
    toast.success(`${product.title} added to cart`, {
      position: 'bottom-right',
    });
  };
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const product = data.product;

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto md:h-auto lg:h-96 object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          {product.title}
        </h2>
        <p className="text-gray-700 md:text-lg lg:text-xl mb-4">
          {product.description}
        </p>
        <div className="flex items-center mb-4">
          <p className="text-gray-800 md:text-xl lg:text-2xl mr-4">
            Price: ${product.price}
          </p>
          <select
            className="border rounded-md px-2 py-2 w-16 text-center pr-4"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full ml-4 md:ml-6 lg:ml-8 text-lg lg:text-xl"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
        {product.category?.name && (
          <p className="text-gray-600 text-sm md:text-base">
            Category: {product.category.name}
          </p>
        )}
        <p className="text-gray-600 text-sm md:text-base">
          In stock: {product.stock}
        </p>
      </div>
    </div>
  );
};

export default Product;
