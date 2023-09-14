import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const CartSidebar = ({ cart, onClose }) => {
    console.log('Cart Length:', cart.length);
  return (
    <div className={`cart-sidebar ${cart.length > 0 ? 'show' : ''}`}>
      <div className="p-4">
        <h3 className="text-2xl font-semibold">Your Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {cart.map((cartItem) => (
              <div
                key={cartItem.product.id}
                className="border p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold">
                  {cartItem.product.title}
                </h3>
                <p className="mt-2 text-gray-700">
                  Price: ${(cartItem.product.price || 0) * cartItem.quantity}
                </p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        )}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
