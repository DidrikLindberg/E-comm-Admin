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
// import "./style.css"
// import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
// import Products from "./components/ProductsList";
import Shopping from "./pages/Shopping";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProductLibrary from "./pages/AdminProductLibrary";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ShoppingCart from "./pages/ShoppingCart";



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
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <ProtectedRoute path="/profile" element={<Profile />} /> */}
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProductLibrary />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />

          </Routes>
          </ShoppingCartProvider>
        </Router>
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
}


export default App;
