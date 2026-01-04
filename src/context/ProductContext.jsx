import { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);

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

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      
      {children}
    </ProductContext.Provider>
  );
};
