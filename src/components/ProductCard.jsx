import React from 'react';
import styles from './ProductCard.css';

const ProductCard = ({ product }) => {
  const { title, price, category, stock, thumbnail } = product;

  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={title} className={styles.image} />
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>${price}</p>
        <p className={styles.stock}>{stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
        <button className={styles.button} disabled={stock === 0}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
