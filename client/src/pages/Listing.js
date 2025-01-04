import React from 'react';

const Listing = ({ listing }) => {
  return (
    <div>
      <h2>{listing.name}</h2>
      <p>{listing.description}</p>
      <p>Type: {listing.type}</p>
      <p>Available Gift Types: {listing.availableGiftTypes.join(', ')}</p>
      <p>Start Date: {new Date(listing.startDate).toLocaleDateString()}</p>
      <p>End Date: {new Date(listing.endDate).toLocaleDateString()}</p>
      <p>Min Gift Amount: ${listing.minGiftAmount}</p>
      <p>Max Gift Amount: ${listing.maxGiftAmount}</p>
    </div>
  );
};

export default Listing;