import React, { useEffect } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const ShoppingCart = () => {
  const { cart, addToCart } = useShoppingCart();

  useEffect(() => {
    // Update the cart in local storage whenever the cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); // Include cart as a dependency to trigger the effect when it changes

  const handleAddToCart = (product) => {
    // Find the index of the product in the cart
    const existingCartItemIndex = cart.findIndex((cartItem) => {
      const found = cartItem.product.id === product.id;
      console.log('Product ID:', product.id);
      console.log('CartItem Product ID:', cartItem.product.id);
      return found;
    });

    // Create a copy of the current cart
    let updatedCart = [...cart];

    if (existingCartItemIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      updatedCart[existingCartItemIndex] = {
        ...updatedCart[existingCartItemIndex],
        quantity: updatedCart[existingCartItemIndex].quantity + 1,
      };
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      updatedCart.push({
        product: {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        },
        quantity: 1,
      });
    }

    // Log the updated cart before calling addToCart
    console.log('Updated Cart:', updatedCart);

    // Update the cart state using the addToCart function
    addToCart(updatedCart);
  };

  // Retrieve cart data from local storage initially
  const cartDataFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

  // Log the cart data from local storage
  console.log('Cart Data from Local Storage:', cartDataFromLocalStorage);


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
      {cartDataFromLocalStorage.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartDataFromLocalStorage.map((cartItem) => (
            <div
              key={cartItem.product.id}
              className="border p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  {cartItem.product.title || 'Product Title Not Found'}
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleAddToCart(cartItem.product)}
                    className="bg-blue-500 text-white rounded-full p-2"
                  >
                    +
                  </button>
                  <span className="font-semibold">{cartItem.quantity}</span>
                </div>
              </div>
              <p className="mt-2 text-gray-700">
                Price: ${(cartItem.product.price || 0) * cartItem.quantity}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
