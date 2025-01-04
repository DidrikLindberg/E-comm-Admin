// src/components/ShopCard.js
import React from 'react';
import './ShopCard.css'; // Import the CSS for styling

const ShopCard = ({ shop }) => {
    return (
        <div className="shop-card">
            <img src={shop.imageURL} alt={shop.name} className="shop-image" />
            <div className="shop-details">
                <h3 className="shop-title">{shop.name}</h3>
                <p className="shop-address">{shop.address}</p>
                <p className="shop-description">{shop.description}</p>
                <a href={`/shop/${shop.shopId}`} className="learn-more">Learn More</a>
            </div>
        </div>
    );
};

export default ShopCard;