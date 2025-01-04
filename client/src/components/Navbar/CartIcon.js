import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useShoppingCart } from '../../context/ShoppingCartContext';

const CartIcon = ({ onClick }) => {
  const { cart } = useShoppingCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon" onClick={onClick}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
    </div>
  );
};

export default CartIcon;