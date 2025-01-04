import React from 'react';

const Gift = ({ gift }) => {
  return (
    <div>
      <h2>{gift.name}</h2>
      <p>Gift Giver: {gift.giftGiver}</p>
      <p>Gift Recipient: {gift.giftRecipient}</p>
      <p>Gift Value: ${gift.giftValue}</p>
      <p>Gift Note: {gift.giftNote}</p>
      <p>Status: {gift.giftStatus}</p>
    </div>
  );
};

export default Gift;