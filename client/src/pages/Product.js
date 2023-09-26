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

    // Create a cart item
    const cartItem = {
      product: {
        id: product._id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
      quantity: quantity,
    };

    // Add the item to the cart
    addToCart(cartItem);

    // Display a success notification
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
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto md:h-auto lg:h-96 object-contain"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              {product.title}
            </h2>
            <p className="text-gray-700 md:text-lg lg:text-xl mb-4">
              {product.description}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-800 md:text-xl lg:text-2xl mr-4">
              Price: ${product.price}
            </p>
            <select
              className="border rounded-md px-2 py-2 w-16 text-center pr-4"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full md:text-lg lg:text-xl"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-6">Description</h3>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <pre className="description2 text-gray-700 whitespace-pre-wrap">
            {product.description2}
          </pre>
        </div>
      </div>
    </div>
    
  );
};

export default Product;
