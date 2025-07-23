import React from "react";
import styles from './ProductPage.module.css';

const Details = () => {
  return (
    <>
      <div className={styles.detailsSection}>
        <h1 className={styles.title}>Product Title</h1>
        <p className={styles.price}>₹999.00</p>
        <ul className={styles.features}>
          <li>Feature 1: High quality material</li>
          <li>Feature 2: Long battery life</li>
          <li>Feature 3: 1-year warranty</li>
          <li>Feature 4: Available in multiple colors</li>
        </ul>
        <button className={styles.buyButton}>Buy Now</button>
        <button className={styles.cartButton}>Add to Cart</button>
      </div>
    </>
  );
};

export default Details;
