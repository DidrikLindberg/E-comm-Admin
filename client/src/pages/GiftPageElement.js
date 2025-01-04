import React from 'react';

const GiftPageElement = ({ element }) => {
  return (
    <div>
      <h3>{element.name}</h3>
      <p>Category: {element.category}</p>
      <p>Sub-Category: {element.subCategory}</p>
      <p>Status: {element.status}</p>
    </div>
  );
};

export default GiftPageElement;