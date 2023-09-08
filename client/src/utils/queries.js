import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getMe {
    users {
      _id
      username
      email
      role
    }
  }
`;


export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
      role 
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
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
      _id
      title
      headline
      description
      image
      price
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



export const ADD_PRODUCT = gql`
  mutation AddProduct($title: String!, $image: String, $description: String!) {
    addProduct(title: $title, image: $image, description: $description) {
      title
      image
      description
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($productId: ID!) {
    deleteProduct(productId: $productId) {
      title
      image
      description
    }
  }
`;
