import React from 'react';

const PersonAccount = ({ person }) => {
  return (
    <div>
      <h2>{person.firstName} {person.lastName}</h2>
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <p>Address: {person.billingStreet}, {person.billingCity}, {person.billingState}, {person.billingZip}, {person.billingCountry}</p>
    </div>
  );
};

export default PersonAccount;