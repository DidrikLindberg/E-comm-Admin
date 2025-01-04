import React from 'react';

const GiftPage = ({ giftPage }) => {
  return (
    <div>
      <h2>{giftPage.name}</h2>
      <p>Brand: {giftPage.brand}</p>
      <p>Configuration Type: {giftPage.configurationType}</p>
      <p>Type: {giftPage.giftPageType}</p>
      <p>Status: {giftPage.status}</p>
      <p>URL: <a href={giftPage.url}>{giftPage.url}</a></p>
    </div>
  );
};

export default GiftPage;