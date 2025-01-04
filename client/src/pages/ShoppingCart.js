import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart, changeItemQuantity } = useShoppingCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {cart.map((item) => (
              <div key={item.product.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{item.product .title}</h3>
                  <p className="text-gray-600">Price: ${item.product.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-200 text-gray-700 py-1 px-2 rounded-l hover:bg-gray-300"
                      onClick={() => changeItemQuantity(item, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      readOnly
                      className="text-center border-t border-b border-gray-300 w-12"
                    />
                    <button
                      className="bg-gray-200 text-gray-700 py-1 px-2 rounded-r hover:bg-gray-300"
                      onClick={() => changeItemQuantity(item, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Summary</h3>
            <p className="text-lg">Total Items: {totalItems}</p>
            <p className="text-lg font-bold">Total Price: ${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;