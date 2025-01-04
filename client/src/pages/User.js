import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <h2>Username: {user.username}</h2>
      <p>Email: {user.person.email}</p>
      <p>Phone: {user.person.phone}</p>
    </div>
  );
};

export default User;