import React, { useContext } from 'react';
import styles from './CartItem.module.css';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0 && quantity <= item.stock) {
      updateQuantity(item.id, quantity);
      
    }
  };

  return (
    <div className={styles.cartItem}>
      <img src={item.thumbnail} alt={item.title} className={styles.image} />
      <div className={styles.itemDetails}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price}</p>
      </div>

      <div className={styles.numAndBtn}>

      <div className={styles.quantityControl}>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
          max={item.stock}
          className={styles.quantityInput}
        />
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className={styles.removeButton}
      >
        Remove
      </button>
      </div>
      
    </div>
  );
};

export default CartItem;
