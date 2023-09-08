import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const ShoppingCart = () => {
  // Access the cart data using the useShoppingCart hook
  const { cart, addToCart } = useShoppingCart();

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    const existingCartItem = updatedCart.find((item) => item.product.id === product.id);

    if (existingCartItem) {
      // If the product already exists in the cart, increase its quantity
      existingCartItem.quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      updatedCart.push({ product, quantity: 1 });
    }

    addToCart(updatedCart);
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((cartItem) => (
            <li key={cartItem.product.id} className="cart-item">
              <div className="item-info">
                <p className="item-title">{cartItem.product.title}</p>
                <div className="item-quantity">
                  <button onClick={() => handleAddToCart(cartItem.product)}>+</button>
                  <span>{cartItem.quantity}</span>
                </div>
                <p className="item-price">Price: ${cartItem.product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
