import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Cart = ({ onClose }) => {
  const { cart } = useShoppingCart();

  return (
    <div className="fixed top-0 right-0 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 z-50">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">Your Shopping Cart</h5>
        <button onClick={onClose} className="text-sm font-medium text-blue-600 hover:underline">
          Close
        </button>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200">
          {cart.length === 0 ? (
            <li className="py-3 text-center text-gray-500">Your cart is empty.</li>
          ) : (
            cart.map((item) => (
              <li key={item.product.id} className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={item.product.image} alt={item.product.title} />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.product.title}</p>
                    <p className="text-sm text-gray-500 truncate">Quantity: {item.quantity}</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cart;