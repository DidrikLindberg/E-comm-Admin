import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;


export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($name: String!, $description: String, $billingStreet: String, $billingCity: String, $billingState: String, $billingZip: String, $billingCountry: String, $website: String, $phone: String, $email: String, $instagram: String) {
    createAccount(name: $name, description: $description, billingStreet: $billingStreet, billingCity: $billingCity, billingState: $billingState, billingZip: $billingZip, billingCountry: $billingCountry, website: $website, phone: $phone, email: $email, instagram: $instagram) {
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
  }
`;

export const CREATE_LISTING = gql`
  mutation CreateListing($name: String!, $description: String, $type: String, $availableGiftTypes: [String], $brandAvailability: [String], $localMarket: String, $startDate: Date, $endDate: Date, $minGiftAmount: Float, $maxGiftAmount: Float, $shopConsent: String) {
    createListing(name: $name, description: $description, type: $type, availableGiftTypes: $availableGiftTypes, brandAvailability: $brandAvailability, localMarket: $localMarket, startDate: $startDate, endDate: $endDate, minGiftAmount: $minGiftAmount, maxGiftAmount: $maxGiftAmount, shopConsent: $shopConsent) {
      id
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

export const CREATE_GIFT_PAGE = gql`
  mutation CreateGiftPage($brand: String!, $configurationType: String, $name: String!, $giftPageType: String, $url: String, $status: String) {
    createGiftPage(brand: $brand, configurationType: $configurationType, name: $name, giftPageType: $giftPageType, url: $url, status: $status) {
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

export const CREATE_GIFT_PAGE_ELEMENT = gql`
  mutation CreateGiftPageElement($giftPageId: ID!, $name: String!, $category: String, $subCategory: String, $listingId: ID, $giftTypesOffered: [String], $status: String) {
    createGiftPageElement(giftPageId: $giftPageId, name: $name, category: $category, subCategory: $subCategory, listingId: $listingId, giftTypesOffered: $giftTypesOffered, status: $status) {
      id
      giftPage {
        id
        name
      }
      name
      category
      subCategory
      listing {
        id
        name
      }
      giftTypesOffered
      status
    }
  }
`;

export const CREATE_GIFT = gql`
  mutation CreateGift($giftPageId: ID!, $name: String!, $giftGiverId: ID!, $giftRecipientId: ID!, $giftValue: Float, $giftNote: String, $giftSelectedId: ID, $giftTypeSelected: String) {
    createGift(giftPageId: $giftPageId, name: $name, giftGiverId: $giftGiverId, giftRecipientId: $giftRecipientId, giftValue: $giftValue, giftNote: $giftNote, giftSelectedId: $giftSelectedId, giftTypeSelected: $giftTypeSelected) {
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
      giftStatus
    }
  }
`;

export const CREATE_PERSON_ACCOUNT = gql`
  mutation CreatePersonAccount($firstName: String!, $lastName: String!, $email: String, $phone: String, $billingStreet: String, $billingCity: String, $billingState: String, $billingZip: String, $billingCountry: String) {
    createPersonAccount(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, billingStreet: $billingStreet, billingCity: $billingCity, billingState: $billingState, billingZip: $billingZip, billingCountry: $billingCountry) {
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

export const CREATE_USER = gql`
  mutation CreateUser ($username: String!, $password: String!, $personId: ID!, role: String!) {
    createUser (username: $username, password: $password, personId: $personId, role: $role) {
      id
      username
      role
      person {
        id
        firstName
        lastName
      }
    }
  }
`;

export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
deleteUser(id: $id) {
id
}
}
`;