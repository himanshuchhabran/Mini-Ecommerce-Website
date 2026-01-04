import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import styles from './Filters.module.css';

const Filters = () => {
  const {
    filters,
    setFilters,
    categories,
    clearFilters,
  } = useContext(ProductContext);

  const handleSearchChange = (e) => {
    setFilters({ ...filters, searchTerm: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleSortChange = (e) => {
    setFilters({ ...filters, sortBy: e.target.value });
  };

  return (
    <div className={styles.filters}>
      <input
        type="text"
        placeholder="Search by name"
        value={filters.searchTerm}
        onChange={handleSearchChange}
        className={styles.input}
      />
      <select
        value={filters.category}
        onChange={handleCategoryChange}
        className={styles.select}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        value={filters.sortBy}
        onChange={handleSortChange}
        className={styles.select}
      >
        <option value="">Sort by Price</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
      <button onClick={clearFilters} className={styles.button}>
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
