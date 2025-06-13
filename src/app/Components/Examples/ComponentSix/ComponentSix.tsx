import React from 'react';
import styles from './ComponentSix.module.css';

const ComponentSix = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.mainHeading}>ComponentSix</h2>
        <p className={styles.mainDescription}>
          Explore Stripe or get in touch with our sales team.
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.primaryButton}>Start your journey</button>
        <button className={styles.secondaryButton}>Contact sales</button>
      </div>
    </section>
  );
};

export default ComponentSix; 