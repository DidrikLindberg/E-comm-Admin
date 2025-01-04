import React from 'react';

const Account = ({ account }) => {
  if (!account) {
    return <div>No account data available.</div>; // Handle undefined account
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h2>{account.name}</h2>
      <p>{account.description}</p>
      <p>
        {account.billingStreet}, {account.billingCity}, {account.billingState}, {account.billingZip}, {account.billingCountry}
      </p>
      <p>
        Website: <a href={account.website} target="_blank" rel="noopener noreferrer">{account.website}</a>
      </p>
      <p>Phone: {account.phone}</p>
      <p>Email: {account.email}</p>
      <p>
        Instagram: <a href={account.instagram} target="_blank" rel="noopener noreferrer">{account.instagram}</a>
      </p>
    </div>
  );
};

export default Account;