import { gql } from '@apollo/client';


export const GET_USERS = gql`
  query getUsers {
    users {
      id
      username
      email
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      id
      email
    }
  }
`;

export const GET_PRODUCTS = gql`
query GetProducts {
    products {    
    description
    headline
    _id
    image
    title
    category {
        _id
        name
      }
      createdBy {
        email
        _id
        username
      }
  
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($productId: ID!) {
    product(id: $productId) {
      idcategory
      title
      headline
      description
      image
    }
  }
`;


export const ADD_TO_CART = gql`
  mutation AddToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      id
      product {
        id
        name
        price
        image
      }
      quantity
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($cartItemId: ID!) {
    removeFromCart(cartItemId: $cartItemId) {
      id
      product {
        id
        name
        price
        image
      }
      quantity
    }
  }
`;

export const UPDATE_CART_ITEM_QUANTITY = gql`
  mutation UpdateCartItemQuantity($cartItemId: ID!, $quantity: Int!) {
    updateCartItemQuantity(cartItemId: $cartItemId, quantity: $quantity) {
      id
      product {
        id
        name
        price
        image
      }
      quantity
    }
  }
`;