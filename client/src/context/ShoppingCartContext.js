import React, { createContext, useContext, useReducer } from 'react';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};

const initialState = { cart: [] };

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItemIndex !== -1) {
        // If the product already exists in the cart, update its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        // If the product is not in the cart, add it with the given quantity
        return { ...state, cart: [...state.cart, action.payload] };
      }

    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);

  const addToCart = (cartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  // Calculate the total quantity in the cart
  const totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <ShoppingCartContext.Provider value={{ cart: state.cart, addToCart, totalQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
