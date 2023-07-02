import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { ThemeContext, ThemeProvider } from "./utils/ThemeContext";
import "./style.css";
// import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import { Products } from "./pages/Products";


// Create an HTTP link to the GraphQL server
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Create an auth link to include the authentication token in the headers
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
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
  // const { theme } = useContext(ThemeContext);
  return (
    <ApolloProvider client={client}>
      {/* <ThemeProvider value={theme}> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <ProtectedRoute path="/profile" element={<Profile />} /> */}
            <Route path="/products" element={<Products />} />
            {/* <Route path="/products/:id" element={<SingleProduct />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/success" element={<Success />} /> */}
            {/* <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/products/:id" element={<AdminSingleProduct />} />
            <Route path="/admin/categories" element={<AdminCategories />} />
            <Route path="/admin/categories/:id" element={<AdminSingleCategory />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/orders/:id" element={<AdminSingleOrder />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/users/:id" element={<AdminSingleUser />} />
            <Route path="/admin/tags" element={<AdminTags />} />
            <Route path="/admin/tags/:id" element={<AdminSingleTag />} />
            <Route path="/admin/addProduct" element={<AdminAddProduct />} />
            <Route path="/admin/addCategory" element={<AdminAddCategory />} />
            <Route path="/admin/addTag" element={<AdminAddTag />} />
            <Route path="/admin/addUser" element={<AdminAddUser />} />
            <Route path="/admin/addOrder" element={<AdminAddOrder />} />
            <Route path="/admin/addOrderItem" element={<AdminAddOrderItem />} />
            <Route path="/admin/updateProduct/:id" element={<AdminUpdateProduct />} />
            <Route path="/admin/updateCategory/:id" element={<AdminUpdateCategory />} />
            <Route path="/admin/updateTag/:id" element={<AdminUpdateTag />} />
            <Route path="/admin/updateUser/:id" element={<AdminUpdateUser />} />
            <Route path="/admin/updateOrder/:id" element={<AdminUpdateOrder />} /> */}

          </Routes>
        </Router>
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
}


export default App;
