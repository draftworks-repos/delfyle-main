import React from 'react';
import styles from './ComponentSeven.module.css';

const ComponentSeven = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>ComponentSeven</h2>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Speak to an expert for tailored solutions and custom pricing
            for your business.
          </p>
        </div>
        <button className={styles.button}>Contact sales &gt;</button>
      </div>
      <div className={styles.features}>
        <div className={styles.featureColumn}>
          <p className={styles.featureItem}>Interchange plus pricing</p>
          <p className={styles.featureItem}>Country-specific rates</p>
          <p className={styles.featureItem}>Deployment services</p>
        </div>
        <div className={styles.featureColumn}>
          <p className={styles.featureItem}>Volume discounts</p>
          <p className={styles.featureItem}>Multi-product discounts</p>
          <p className={styles.featureItem}>Technical account management</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentSeven; 