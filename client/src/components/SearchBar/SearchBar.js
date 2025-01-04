import React from 'react';
import styles from './SearchBar.module.css'; // Importing CSS Module

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for products..."
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;