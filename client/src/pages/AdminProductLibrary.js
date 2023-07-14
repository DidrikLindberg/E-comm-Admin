import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from "../utils/queries";
import ProductsList from "../components/ProductsList";

const ProductLibrary = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [addProduct] = useMutation(ADD_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && data) {
      // Perform any additional logic here if needed
    }
  }, [loading, data]);

  const handleAddProduct = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const image = event.target.image.value;
    const description = event.target.description.value;

    addProduct({
      variables: {
        title,
        image,
        description,
      },
      refetchQueries: [{ query: GET_PRODUCTS }],
    })
      .then(() => {
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct({
      variables: {
        productId,
      },
      refetchQueries: [{ query: GET_PRODUCTS }],
    })
      .then(() => {
        // Handle successful deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelectProduct = (event, productId) => {
    if (event.target.checked) {
      setSelectedProducts((prevSelectedProducts) => [
        ...prevSelectedProducts,
        productId,
      ]);
    } else {
      setSelectedProducts((prevSelectedProducts) =>
        prevSelectedProducts.filter((id) => id !== productId)
      );
    }
  };

  if (error) {
    console.log(error);
    return <div>Error fetching products</div>;
  }

  return (
    <div>
      <h2>Product Library</h2>

      <div className="flex justify-center">
        <ProductsList
          products={data?.products || []}
          handleDeleteProduct={handleDeleteProduct}
          handleSelectProduct={handleSelectProduct}
        />
      </div>

      <form onSubmit={handleAddProduct}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="image" placeholder="Image URL" />
        <textarea name="description" placeholder="Description"></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductLibrary;
