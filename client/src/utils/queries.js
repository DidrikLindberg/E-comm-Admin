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


// export const GET_USERS = gql`
//   query getUsers {
//     users {
//       _id
//       username
//       email
//       role 
//     }
//   }
// `;
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
      _id
      title
      description
      description2
      image
      price
      category {
        _id
        name
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
      description2
      image
      price
        category {
        _id
        name
        }
    }
  }
`;



export const ADD_TO_CART = gql`
  mutation AddToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      id
      product {
        _id
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
        _id
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
        _id
        name
        price
        image
      }
      quantity
    }
  }
`;



export const ADD_PRODUCT = gql`
  mutation AddProduct($title: String!, $image: String, $description: String!, $description2: String!) {
    addProduct(title: $title, image: $image, description: $description, description2: $description2) {
      title
      image
      description
      description2
      category
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($productId: ID!) {
    deleteProduct(productId: $productId) {
      title
      image
      description
      description2
      category
    }
  }
`;


export const GET_LOCATION_DATA = gql`
  query GetLocationData {
    locations {
      _id
      cityName
    }
  }
`;

// export const GET_CATEGORIES = gql`
//   query GetCategories($location: String!) {
//     categories(location: $location) {
//       id
//       categoryName
//       // imageURL
//     }
//   }
// `;

export const GET_SHOPS = gql`
  query GetShops($location: String!) {
    shops(location: $location) {
      _id
      name
      address
      description
      imageURL
      location {
      _id
      latitude
      longitude
}
    }
  }
`;



export const GET_HIGHLIGHTED_SHOPS = gql`
  query GetHighlightedShops($location: String!) {
    highlightedShops(location: $location) {
      shopId
      name
      address
      description
      imageURL
    }
  }
`;


export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      _id
      cityName
      latitude
      longitude
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      _id
      name
    }
  }
`;


export const GET_FEATURED_SHOPS = gql`
  query GetFeaturedShops {
    featuredShops {
      _id
      shop {
        _id
        name
        address
        description
        imageURL
      }
      featuredDate
    }
  }
`;


export const GET_ACCOUNTS = gql`
  query GetAccounts {
    accounts {
      id
      name
      description
      billingStreet
      billingCity
      billingState
      billingZip
      billingCountry
      website
      phone
      email
      instagram
      listings {
      id}
    }
  }
`;

export const GET_LISTINGS = gql`
  query GetListings {
    listings {
      id
      account {
      id
      name
      description
      billingStreet
      billingCity
      billingState
      billingZip
      billingCountry
      website
      phone
      email
      instagram
    }
      name
      description
      type
      availableGiftTypes
      brandAvailability
      localMarket
      startDate
      endDate
      minGiftAmount
      maxGiftAmount
      shopConsent
    }
  }
`;

export const GET_LISTINGS_IN_CITY = gql`
query GetListingsInCity($billingcity: String!) {
  listingsInCity(billingCity: $billingcity) {
    id
    name
    description
    type
    account {
      id
      name
      billingCity
      billingZip
    }
  }
}
  `;

export const GET_GIFT_PAGES = gql`
  query GetGiftPages {
    giftPages {
      id
      brand
      configurationType
      name
      giftPageType
      url
      status
    }
  }
`;

export const GET_GIFT_PAGE_ELEMENTS = gql`
query GetGiftPageElement {
    getGiftPageElement(id: "gift-page-element-id") {
      id
      name
      category
      subCategory
      listing {
        id
        name
      }
      giftTypesOffered
      status
      description
      listingUrl
      listingType
      shopName
      billingStreet
      billingCity
      billingState
      billingZip
      billingCountry
      phone
      email
    }
  }
`;


export const GET_GIFTS = gql`
  query GetGifts {
    gifts {
      id
      giftPage {
        id
        name
      }
      name
      giftGiver {
        id
        firstName
        lastName
      }
      giftRecipient {
        id
        firstName
        lastName
      }
      giftValue
      giftNote
      giftSelected {
        id
        name
      }
      giftTypeSelected
      giftSelectedDate
      giftStatus
    }
  }
`;

export const GET_PERSON_ACCOUNTS = gql`
  query GetPersonAccounts {
    personAccounts {
      id
      firstName
      lastName
      email
      phone
      billingStreet
      billingCity
      billingState
      billingZip
      billingCountry
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      person {
        id
        firstName
        lastName
        email
        phone
      }
    }
  }
`;