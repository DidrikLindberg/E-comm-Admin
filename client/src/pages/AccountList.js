import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ACCOUNTS } from '../utils/queries';
import Account from '../components/Account';

const AccountList = () => {
  const { loading, error, data } = useQuery(GET_ACCOUNTS);

  if (loading) return <p>Loading Accounts...</p>;
  if (error) return <p>Error loading Accounts: {error.message}</p>;

  return (
    <div>
      <h1>Accounts</h1>
      {data.accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </div>
  );
};

export default AccountList;