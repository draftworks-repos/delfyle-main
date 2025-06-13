import React from 'react';
import styles from './ComponentThird.module.css';

const ComponentThird = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.mainHeading}>Integrate faster</h2>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}></div>
          <h3 className={styles.cardTitle}>Professional services</h3>
          <p className={styles.cardDescription}>
            Integrate Stripe faster and with fewer people, with the help of
            our in-house payments and financial services experts. Our team
            supports compliance of regulatory requirements and data
            security standards.
          </p>
          <a href="#" className={styles.learnMore}>Learn more &gt;</a>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}></div>
          <h3 className={styles.cardTitle}>Services partners</h3>
          <p className={styles.cardDescription}>
            Engage a certified Stripe partner to help with strategy,
            implementation, deployment, global expansion, or managed
            services for your Stripe solution.
          </p>
          <a href="#" className={styles.learnMore}>Learn more &gt;</a>
        </div>
      </div>
    </section>
  );
};

export default ComponentThird; 