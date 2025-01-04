import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ACCOUNTS } from '../utils/queries';

const Account = ({ account }) => {

      const { loading, error, data } = useQuery(GET_ACCOUNTS);
    
      if (loading) return <p>Loading Accounts...</p>;
      if (error) return <p>Error loading Accounts: {error.message}</p>;
    
  return (
    <div>
      <h2>{Account.name}</h2>
      <p>{Account.description}</p>
      <p>{Account.billingStreet}, {Account.billingCity}, {Account.billingState}, {Account.billingZip}, {Account.billingCountry}</p>
      <p>Website: <a href={Account.website}>{Account.website}</a></p>
      <p>Phone: {Account.phone}</p>
      <p>Email: {Account.email}</p>
      <p>Instagram: {Account.instagram}</p>
    </div>
  );
};

export default Account;