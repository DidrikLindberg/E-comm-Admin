// src/components/FeaturedShops.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEATURED_SHOPS } from '../../utils/queries';
import ShopCard from './ShopCard';
import './FeaturedShops.css';

const FeaturedShops = () => {
  const { data, loading, error } = useQuery(GET_FEATURED_SHOPS);

  if (loading) return <p>Loading featured shops...</p>;
  if (error) {
    console.error("Error loading featured shops:", error);
    return <p>We’re having trouble loading featured shops. Please try again later.</p>;
  }

  return (
    <div className="featured-shops">
      <h2>Featured Shops</h2>
      <div className="shop-list">
        {data.featuredShops.map(shop => (
          <ShopCard key={shop._id} shop={shop.shop} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedShops;