import React from 'react';

const Dropdown = ({ options }) => {
  return (
    <select>
      {options.map((option, index) => (
        <option key={option.id || index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
