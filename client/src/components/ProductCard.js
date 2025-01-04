import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useShoppingCart();

  const handleAddToCart = () => {
    addToCart({ product, quantity: 1 });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <div className="product-image-container">
          <img className="product-image" src={product.image} alt={product.title} />
        </div>
      </Link>
      <div className="product-details">
        <Link to={`/product/${product._id}`}>
          <h5 className="product-title">{product.title}</h5>
        </Link>
        <div className="rating">
          {/* Example rating stars */}
          <svg className="star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
          <span className="rating-value">5.0</span>
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="add-to-cart"
            aria-label={`Add ${product.title} to cart`}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;