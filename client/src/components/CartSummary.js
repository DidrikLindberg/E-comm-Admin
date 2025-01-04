import React from 'react';

const CartSummary = ({ cart }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);

  return (
    <div className="mt-8 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold">Cart Summary</h2>
      <p className="mt-2">Total Items: {totalItems}</p>
      <p className="mt-2">Total Price: ${totalPrice}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;