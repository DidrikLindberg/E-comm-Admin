import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_LISTINGS = gql`
  query GetListings($zipCode: String!) {
    listings(zipCode: $zipCode) {
      id
      name
      description
      address
    }
  }
`;

const LocationLandingPage = () => {
  const { zipCode } = useParams();
  const [listings, setListings] = useState([]);

  console.log('LocationLandingPage Rendered. Zip Code:', zipCode); // Debug: Log zip code from URL

  const { data, error, loading } = useQuery(GET_LISTINGS, {
    variables: { zipCode },
  });

  useEffect(() => {
    if (data) {
      console.log('Listings Data:', data.listings); // Debug: Log fetched listings
      setListings(data.listings);
    }
    if (error) {
      console.error('Error Fetching Listings:', error.message); // Debug: Log error
    }
  }, [data, error]);

  if (loading) {
    console.log('Loading Listings...'); // Debug: Log loading state
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Error:', error.message); // Debug: Log error
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Listings in {zipCode}</h1>
      <ul className="space-y-4">
        {listings.map((listing) => (
          <li key={listing.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{listing.name}</h2>
            <p className="text-gray-600">{listing.description}</p>
            <p className="text-sm text-gray-500">{listing.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationLandingPage;