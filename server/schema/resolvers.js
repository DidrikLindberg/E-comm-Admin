const { AuthenticationError } = require('apollo-server-express');
const { User, Location, Category, Shop, Product, FeaturedShop, Account, Listing, GiftPage, GiftPageElement, Gift, PersonAccount } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');

const resolvers = {
  Query: {
    // Fetch accounts
    accounts: async () => {
      const accounts = await Account.find().populate('listings'); // Fetch all accounts from the database
      if (!accounts || accounts.length === 0) {
        return []; // Return an empty array instead of null
      }
      return accounts;
    },

    listingsInCity: async (_, { billingcity }) => {
      try {
        console.log('Filtering listings for city:', billingcity); // Log the input city

        // Step 1: Find accounts in the specified city
        const accounts = await Account.find({ billingCity: billingcity });

        // Step 2: Extract account IDs
        const accountIds = accounts.map((account) => account._id);

        // Step 3: Find listings associated with those accounts
        const listings = await Listing.find({ account: { $in: accountIds } }).populate('account');

        console.log('Fetched listings:', listings); // Log the fetched listings
        return listings;
      } catch (error) {
        console.error('Error fetching listings:', error);
        throw new Error('Failed to fetch listings');
      }
    },
      



    // Fetch all Listings
    listings: async () => {
      const listings = await Listing.find().populate('account');      
      if (!listings || listings.length === 0) {
        return []; // Return an empty array instead of null
        }
      return listings;
        },

        getGiftPage: async (parent, { id }) => {
          try {
            const giftPage = await GiftPage.findById(id);
            return giftPage;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch gift page');
          }
        },
        getGiftPages: async (parent, { limit, offset }) => {
          try {
            const giftPages = await GiftPage.find().limit(limit).skip(offset);
            return giftPages;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch gift pages');
          }
        },
    

        getGiftPageElement: async (parent, { id }) => {
          try {
            const giftPageElement = await GiftPageElement.findById(id);
            return giftPageElement;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch gift page element');
          }
        },
        getGiftPageElements: async (parent, args) => {
          try {
            const giftPageElements = await GiftPageElement.find({ giftPage: args.giftPageId }).populate('giftPage').populate('listing');
            return giftPageElements.filter((element) => element.giftPage !== null);
          } catch (error) {
            console.error(error);
            throw new Error('Failed to retrieve gift page elements');
          }
        },


        getPersonAccount: async (parent, { id }) => {
          try {
            const personAccount = await PersonAccount.findById(id);
            return personAccount;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to retrieve person account');
          }
        },
        getPersonAccounts: async () => {
          try {
            const personAccounts = await PersonAccount.find();
            return personAccounts;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to retrieve person accounts');
          }
        },


        getUser: async (parent, { id }) => {
          try {
            const user = await User.findById(id);
            return user;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to retrieve user');
          }
        },
        getUsers: async () => {
          try {
            const users = await User.find().populate('person');
            return users;
          } catch (error) {
            console.error('Error retrieving users:', error);
            throw new Error('Failed to retrieve users');
          }
        },
    // Fetch all users
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },

    // Fetch a single user by ID
    user: async (parent, { id }) => {
      try {
        return await User.findById(id);
      } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to fetch user");
      }
    },

    // Fetch all locations
    locations: async () => {
      try {
        return await Location.find();
      } catch (error) {
        console.error("Error fetching locations:", error);
        throw new Error("Failed to fetch locations");
      }
    },

    // Fetch all categories
    categories: async () => {
      try {
        return await Category.find();
      } catch (error) {
        console.error("Error fetching categories:", error);
        throw new Error("Failed to fetch categories");
      }
    },

    featuredShops: async () => {
      try {
        const featuredShops = await FeaturedShop.find().populate('shop'); // Ensure you populate the shop details
        return featuredShops;
      } catch (error) {
        console.error("Error fetching featured shops:", error);
        throw new Error("Failed to fetch featured shops");
      }
    },

    // Fetch shops by location ID
    shops: async (parent, { location }) => {
      try {
        // Validate the location ID
        if (!mongoose.Types.ObjectId.isValid(location)) {
          throw new Error(`Invalid location ID: ${location}`);
        }
    
        // Find the location by ID
        const foundLocation = await Location.findById(location);
        if (!foundLocation) {
          throw new Error(`Location with ID "${location}" not found`);
        }
    
        // Fetch shops associated with the found location and populate the location field
        const shops = await Shop.find({ location: foundLocation._id }).populate('location');
        if (!shops || shops.length === 0) {
          throw new Error(`No shops found for location "${foundLocation.cityName}"`);
        }
    
        return shops;
      } catch (error) {
        console.error("Error fetching shops:", error);
        throw new Error("Failed to fetch shops");
      }
    },

    // Fetch all products
    products: async () => {
      try {
        return await Product.find().populate('category').populate('shop');
      } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
      }
    },

    // Fetch a single product by ID
    product: async (parent, { id }) => {
      try {
        return await Product.findById(id).populate('category').populate('shop');
      } catch (error) {
        console.error("Error fetching product:", error);
        throw new Error("Failed to fetch product");
      }
    },
  },

  Mutation: {
    // Add a new user
    addUser: async (parent, { username, email, password, role }) => {
      try {
        const user = await User.create({ username, email, password, role });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error("Error adding user:", error);
        throw new Error("Failed to add user");
      }
    },

    // User login
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password');
        }
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error("Error logging in:", error);
        throw new Error("Failed to log in");
      }
    },

    createUser: async (parent, args) => {
      try {
        const user = new User({
          person: args.personId,
          username: args.username,
          password: args.password,
          role: args.role,
          email: args.email,
        });
        await user.save();
        const populatedUser  = await User.findById(user._id).populate('person');
        return populatedUser ;
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
      }
      },
      
    updateUser: async (parent, args) => {
      try {
        const user = await User.findByIdAndUpdate(args.id, args, { new: true });
        return user;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to update user');
      }
    },
    deleteUser: async (parent, { id }) => {
      try {
        // Find and delete the user by ID
        const deletedUser  = await User.findByIdAndDelete(id);
    
        // If the user is not found, throw an error
        if (!deletedUser ) {
          throw new Error('User  not found');
        }
    
        // Return true if the user is successfully deleted
        return true;
      } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Failed to delete user');
      }
    },

    // Add a new location
    addLocation: async (parent, { cityName, latitude, longitude }) => {
      try {
        const location = await Location.create({ cityName, latitude, longitude });
        return location;
      } catch (error) {
        console.error("Error adding location:", error);
        throw new Error("Failed to add location");
      }
    },

    // Add a new category
    addCategory: async (parent, { name }) => {
      try {
        const category = await Category.create({ name });
        return category;
      } catch (error) {
        console.error("Error adding category:", error);
        throw new Error("Failed to add category");
      }
    },

    // Add a new shop
    addShop: async (parent, { name, address, description, imageURL, locationId }) => {
      try {
        const shop = await Shop.create({ name, address, description, imageURL, location: locationId });
        return shop;
      } catch (error) {
        console.error("Error adding shop:", error);
        throw new Error("Failed to add shop");
      }
    },

    // Add a new product
    addProduct: async (parent, { name, price, categoryId, shopId }) => {
      try {
        const product = await Product.create({ name, price, category: categoryId, shop: shopId });
        return product;
      } catch (error) {
        console.error("Error adding product:", error);
        throw new Error("Failed to add product");
      }
    },

    createGiftPage: async (parent, { brand, configurationType, name, giftPageType, url, status }) => {
      try {
        const giftPage = new GiftPage({
          brand,
          configurationType,
          name,
          giftPageType,
          url,
          status,
        });
        await giftPage.save();
        return giftPage;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create gift page');
      }
    },
    updateGiftPage: async (parent, { id, brand, configurationType, name, giftPageType, url, status }) => {
      try {
        const giftPage = await GiftPage.findById(id);
        if (!giftPage) {
          throw new Error('Gift page not found');
        }
        giftPage.brand = brand;
        giftPage.configurationType = configurationType;
        giftPage.name = name;
        giftPage.giftPageType = giftPageType;
        giftPage.url = url;
        giftPage.status = status;
        await giftPage.save();
        return giftPage;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to update gift page');
      }
    },
    deleteGiftPage: async (parent, { id }) => {
      try {
        const giftPage = await GiftPage.findByIdAndRemove(id);
        if (!giftPage) {
          throw new Error('Gift page not found');
        }
        return true;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to delete gift page');
      }
    },

    createGiftPageElement: async (parent, args) => {
      try {
        const listingId = new mongoose.Types.ObjectId(args.listingId);
        const giftPageId = new mongoose.Types.ObjectId(args.giftPageId);
        const giftPage = await GiftPage.findById(giftPageId);
        if (!giftPage) {
          throw new Error('Gift page not found');
        }
        const listing = await Listing.findById(listingId);
        if (!listing) {
          throw new Error('Listing not found');
        }
        const giftPageElement = new GiftPageElement({
          giftPage: giftPageId,
          listing: listingId,
          name: args.name,
          category: args.category,
          subCategory: args.subCategory,
          giftTypesOffered: args.giftTypesOffered,
          status: args.status,
          description: args.description,
          listingUrl: args.listingUrl,
          listingType: args.listingType,
          shopName: args.shopName,
          billingStreet: args.billingStreet,
          billingCity: args.billingCity,
          billingState: args.billingState,
          billingZip: args.billingZip,
          billingCountry: args.billingCountry,
          phone: args.phone,
          email: args.email,
        });
        await giftPageElement.save();
        return {
          id: giftPageElement._id.toString(),
          giftPage: {
            id: giftPageId.toString(),
            name: giftPage.name,
          },
          listing: {
            id: listingId.toString(),
            name: listing.name,
          },
          name: giftPageElement.name,
          category: giftPageElement.category,
          subCategory: giftPageElement.subCategory,
          giftTypesOffered: giftPageElement.giftTypesOffered,
          status: giftPageElement.status,
          description: giftPageElement.description,
          listingUrl: giftPageElement.listingUrl,
          listingType: giftPageElement.listingType,
          shopName: giftPageElement.shopName,
          billingStreet: giftPageElement.billingStreet,
          billingCity: giftPageElement.billingCity,
          billingState: giftPageElement.billingState,
          billingZip: giftPageElement.billingZip,
          billingCountry: giftPageElement.billingCountry,
          phone: giftPageElement.phone,
          email: giftPageElement.email,
        };
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create gift page element');
      }
    },
    updateGiftPageElement: async (parent, { id, giftPageId, name, category, subCategory, listingId, giftTypesOffered, status, description, listingUrl, listingType, shopName, billingStreet, billingCity, billingState, billingZip, billingCountry, phone, email }) => {
      try {
        const giftPageElement = await GiftPageElement.findById(id);
        if (!giftPageElement) {
          throw new Error('Gift page element not found');
        }
        giftPageElement.giftPage = giftPageId;
        giftPageElement.name = name;
        giftPageElement.category = category;
        giftPageElement.subCategory = subCategory;
        giftPageElement.listing = listingId;
        giftPageElement.giftTypesOffered = giftTypesOffered;
        giftPageElement.status = status;
        giftPageElement.description = description;
        giftPageElement.listingUrl = listingUrl;
        giftPageElement.listingType = listingType;
        giftPageElement.shopName = shopName;
        giftPageElement.billingStreet = billingStreet;
        giftPageElement.billingCity = billingCity;
        giftPageElement.billingState = billingState;
        giftPageElement.billingZip = billingZip;
        giftPageElement.billingCountry = billingCountry;
        giftPageElement.phone = phone;
        giftPageElement.email = email;
        await giftPageElement.save();
        return giftPageElement;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to update gift page element');
      }
    },
    deleteGiftPageElement: async (parent, { id }) => {
      try {
        const result = await GiftPageElement.findByIdAndDelete(id);
        return result !== null;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to delete gift page element');
      }
    },

    createPersonAccount: async (parent, args) => {
      try {
        const personAccount = new PersonAccount(args);
        await personAccount.save();
        return personAccount;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create person account');
      }
    },
    updatePersonAccount: async (parent, args) => {
      try {
        const personAccount = await PersonAccount.findByIdAndUpdate(args.id, args, { new: true });
        return personAccount;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to update person account');
      }
    },
    deletePersonAccount: async (parent, { id }) => {
      try {
        await PersonAccount.findByIdAndRemove(id);
        return true;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to delete person account');
      }
    },
  },
};

module.exports = resolvers;