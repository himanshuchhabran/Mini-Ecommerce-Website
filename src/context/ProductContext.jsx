import { createContext, useState, useEffect, useMemo } from 'react';
import { fetchProducts } from '../services/productService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: '',
    sortBy: '',
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const categories = useMemo(() => {
    if (products.length === 0) return [];
    const categorySet = new Set(products.map((p) => p.category));
    return Array.from(categorySet);
  }, [products]);

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      category: '',
      sortBy: '',
    });
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (filters.searchTerm) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    if (filters.sortBy === 'low-to-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'high-to-low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, filters]);

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        loading,
        error,
        filters,
        setFilters,
        categories,
        clearFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

