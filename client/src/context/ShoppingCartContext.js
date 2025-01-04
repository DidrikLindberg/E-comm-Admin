import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};

const loadCartFromLocalStorage = () => {
  try {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    return storedCart || [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

const initialState = {
  cart: loadCartFromLocalStorage(),
};

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return { ...state, cart: action.payload };

    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload.product.id),
      };

    case 'CHANGE_ITEM_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.product.id
            ? { ...item, quantity: action.payload.newQuantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (cartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const removeFromCart = (cartItem) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: cartItem });
  };

  const changeItemQuantity = (cartItem, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItem);
    } else {
      dispatch({ type: 'CHANGE_ITEM_QUANTITY', payload: { product: cartItem.product, newQuantity } });
    }
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        changeItemQuantity,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};