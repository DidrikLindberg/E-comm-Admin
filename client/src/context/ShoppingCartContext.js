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
  cart: loadCartFromLocalStorage(), // Initialize cart from localStorage
};

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return { ...state, cart: action.payload };

    case 'ADD_TO_CART':
      console.log('Adding to cart:', action.payload); // Log the payload
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product?.id === action.payload.product?.id
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

    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart.filter(
        (item) => item.product?.id !== action.payload.product?.id
      );
      return { ...state, cart: updatedCart };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    cart: loadCartFromLocalStorage(), // Initialize cart from localStorage
  });

  // Initialize cartQuantity based on the state's cart
  const [cartQuantity, setCartQuantity] = useState(
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    // Save cart data to local storage whenever the cart state changes
    try {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state.cart]);

  // Function to update the cart and cartQuantity
  const updateCart = (updatedCart) => {
    dispatch({ type: 'LOAD_CART', payload: updatedCart });

    // Calculate the total quantity in the cart
    const newCartQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
    setCartQuantity(newCartQuantity);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: state.cart,
        totalQuantity: cartQuantity,
        addToCart: (cartItem) => {
          console.log('Received cart item:', cartItem); // Log the received cart item
          console.log('Cart Item Product ID:', cartItem.product.id)
          const existingItemIndex = state.cart.findIndex((item) => {
            return item.product.id === cartItem.product.id;
          });

          if (existingItemIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex].quantity += cartItem.quantity;
            updateCart(updatedCart);
          } else {
            updateCart([...state.cart, cartItem]);
          }
        },
        removeFromCart: (cartItem) => {
          const updatedCart = state.cart.filter((item) => item.product.id !== cartItem.product.id);
          updateCart(updatedCart);
        },
        clearCart: () => {
          try {
            localStorage.removeItem('cart');
            dispatch({ type: 'CLEAR_CART' });
            setCartQuantity(0);
          } catch (error) {
            console.error('Error clearing cart from localStorage:', error);
          }
        },
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
