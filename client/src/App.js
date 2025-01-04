import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { ThemeContext, ThemeProvider } from "./utils/ThemeContext";
import "./App.css";
import "./style.css"
// import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
// import Products from "./components/ProductsList";
import Shopping from "./pages/Shopping/Shopping";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProductLibrary from "./pages/AdminProductLibrary";
import Login from "./pages/Login";
// import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ShoppingCart from "./pages/ShoppingCart";
import HomePage from "./pages/Home";
// import Register from "./pages/Register";
import Account from "./pages/Account";
import Listing from "./pages/Listing";
import GiftPage from "./pages/GiftPage";
import GiftPageElement from "./pages/GiftPageElement";
import Gift from "./pages/Gift";
import PersonAccount from "./pages/PersonAccount";
import User from "./pages/User";
import AccountList from "./pages/AccountList";
import LocationLandingPage from "./components/LocationLandingPage";




// Create an HTTP link to the GraphQL server
// Create an HTTP link to the GraphQL server
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql", // Update the URI to the desired URL
});

// Create an auth link to include the authentication token in the headers
const authLink = setContext((_, { headers }) => {
  console.log("authLink");
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  console.log(token);
  // Return the headers to the context so httpLink can read them
  return {
    
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});



// Create an Apollo Client instance with the auth link and the in-memory cache
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  console.log('App component rendering');
  // const { theme } = useContext(ThemeContext);
  return (
    <ApolloProvider client={client}>
      {/* <ThemeProvider value={theme}> */}
        <Router>
          <ShoppingCartProvider>
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/account" element={<Account />} />
            <Route path="/account:id" element={<Account />} />
            <Route path="/accountlist" element={<AccountList />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/gift-page" element={<GiftPage />} />
            <Route path="/gift-page-element" element={<GiftPageElement />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/location/:zipCode" element={<LocationLandingPage />} />
            <Route path="/person-account" element={<PersonAccount />} />
            <Route path="/user" element={<User />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProductLibrary />} />
            {/* <Route path="/shoppingcart" element={<ShoppingCart />} /> */}

          </Routes>
          </ShoppingCartProvider>
        </Router>
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
}


export default App;
