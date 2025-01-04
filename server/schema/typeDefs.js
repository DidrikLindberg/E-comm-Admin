// server/schema/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Account {
    id: ID!
    name: String!
    description: String
    billingStreet: String
    billingCity: String
    billingState: String
    billingZip: String
    billingCountry: String
    website: String
    phone: String
    email: String
    instagram: String
    listings: [Listing]
  }

type PersonAccount {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  phone: String!
  billingStreet: String!
  billingCity: String!
  billingState: String!
  billingZip: String!
  billingCountry: String!
}

    
    type Listing {
    id: ID!
    name: String!
    description: String
    type: String!
    availableGiftTypes: [String]
    brandAvailability: [String]
    localMarket: String!
    startDate: String!
    endDate: String!
    minGiftAmount: Float!
    maxGiftAmount: Float!
    shopConsent: String!
    account: Account!
    }


    type GiftPage {
  id: ID!
  brand: String!
  configurationType: String!
  name: String!
  giftPageType: String!
  url: String!
  status: String!
}

type GiftPageElement {
  id: ID!
  giftPage: GiftPage!
  name: String!
  category: String!
  subCategory: String
  listing: Listing!
  giftTypesOffered: [String!]!
  status: String!
  description: String
  listingUrl: String
  listingType: String
  shopName: String
  billingStreet: String
  billingCity: String
  billingState: String
  billingZip: String
  billingCountry: String
  phone: String
  email: String
}

type Gift {
  id: ID!
  name: String!
  giftGiver: [PersonAccount]!
  giftRecipient: [PersonAccount]!
  giftTypesOffered: [String!]!
  giftNote: String
  giftPage: GiftPage!
  giftSelected: Listing!
  giftTypeSelected: String!
  giftSelectedDate: String!
  giftStatus: String!
  giftValue: Float!
  pageSentDate: String!
  fulfilledBy: String!
  fulfilledDate: String!
  canceledDate: String!
  cancellationReason: String!
  contactlessDelivery: Boolean!
}

  type User {
    _id: ID
    username: String
    email: String
    password: String!
    role: String
    person: PersonAccount
  }

  type Location {
    _id: ID!
    cityName: String!
    latitude: Float!
    longitude: Float!
  }

  type Category {
    _id: ID!
    name: String!
  }

  type Shop {
    _id: ID!
    name: String!
    address: String!
    description: String
    imageURL: String
    location: Location!
    isFeatured: Boolean! 
  }

  type Product {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    image: String
    category: Category!
    shop: Shop!
  }

  type FeaturedShop {
  _id: ID!
  featuredDate: String!
  shop: Shop!
  }

  type Query {
    accounts: [Account!]!
    users: [User !]!
    user(id: ID!): User
    locations: [Location!]!
    categories: [Category!]!
    shops(location: String!): [Shop!]!
    products: [Product!]!
    product(id: ID!): Product
    featuredShops: [FeaturedShop!]!
    listings: [Listing!]!
    listingsInCity(billingcity: String!): [Listing]
    getGiftPage(id: ID!): GiftPage
    getGiftPages(limit: Int, offset: Int): [GiftPage] 
    getGiftPageElement(id: ID!): GiftPageElement
    getGiftPageElements(giftPageId: ID!): [GiftPageElement]
    getGift(id: ID!): Gift
    getGifts(giftPageId: ID!): [Gift]
    getPersonAccount(id: ID!): PersonAccount
    getPersonAccounts: [PersonAccount]
    createUser(personId: ID!, username: String!, password: String!): User
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    addUser (username: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): Auth
    addLocation(cityName: String!, latitude: Float!, longitude: Float!): Location!
    addCategory(name: String!): Category!
    addShop(name: String!, address: String!, description: String, imageURL: String!, locationId: ID!): Shop!
    addProduct(title: String!, description: String!, price: Float!, image: String, categoryId: ID!, shopId: ID!): Product!
    createGiftPage(brand: String!, configurationType: String!, name: String!, giftPageType: String!, url: String!, status: String!): GiftPage
    updateGiftPage(id: ID!, brand: String, configurationType: String, name: String, giftPageType: String, url: String, status: String): GiftPage
    deleteGiftPage(id: ID!): Boolean
    createGiftPageElement(giftPageId: ID!, name: String!, category: String!, subCategory: String, listingId: ID!, giftTypesOffered: [String!]!, status: String!, description: String, listingUrl: String, listingType: String, shopName: String, billingStreet: String, billingCity: String, billingState: String, billingZip: String, billingCountry: String, phone: String, email: String): GiftPageElement
    updateGiftPageElement(id: ID!, giftPageId: ID, name: String, category: String, subCategory: String, listingId: ID, giftTypesOffered: [String!], status: String, description: String, listingUrl: String, listingType: String, shopName: String, billingStreet: String, billingCity: String, billingState: String, billingZip: String, billingCountry: String, phone: String, email: String): GiftPageElement
    deleteGiftPageElement(id: ID!): Boolean
    createGift(name: String!, giftGiverId: ID!, giftRecipientId: ID!, giftTypesOffered: [String!]!, giftNote: String, giftPageId: ID!, giftSelectedId: ID!,  giftTypeSelected: String!,  giftSelectedDate: String!, giftStatus: String!,  giftValue: Float!, pageSentDate: String!,  fulfilledBy: String!, fulfilledDate: String!,  canceledDate: String!,  cancellationReason: String!, contactlessDelivery: Boolean): Gift
  updateGift(
    id: ID!,
    name: String,
    giftGiverId: ID,
    giftRecipientId: ID,
    giftTypesOffered: [String!],
    giftNote: String,
    giftPageId: ID,
    giftSelectedId: ID,
    giftTypeSelected: String,
    giftSelectedDate: String,
    giftStatus: String,
    giftValue: Float,
    pageSentDate: String,
    fulfilledBy: String,
    fulfilledDate: String,
    canceledDate: String,
    cancellationReason: String,
    contactlessDelivery: Boolean,
  ): Gift
  deleteGift(id: ID!): Boolean

   createPersonAccount(
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    billingStreet: String!
    billingCity: String!
    billingState: String!
    billingZip: String!
    billingCountry: String!
  ): PersonAccount

  updatePersonAccount(
    id: ID!
    firstName: String
    lastName: String
    email: String
    phone: String
    billingStreet: String
    billingCity: String
    billingState: String
    billingZip: String
    billingCountry: String
  ): PersonAccount

  deletePersonAccount(id: ID!): Boolean

    createUser(
    personId: ID
    username: String!
    password: String!
    role: String!
    email: String!
  ): User

  updateUser(
    id: ID!
    personId: ID
    username: String
    password: String
    role: String!
    email: String!
  ): User

  deleteUser(id: ID!): Boolean

  }
    
  type Auth {
    token: String!
    user: User
  }
`;

module.exports = typeDefs;