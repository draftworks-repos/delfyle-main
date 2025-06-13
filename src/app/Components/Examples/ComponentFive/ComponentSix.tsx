import React from 'react';
import styles from './ComponentSix.module.css';

const ComponentSix = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <h2 className={styles.mainHeading}>ComponentSix</h2>
          <p className={styles.mainDescription}>
            Stripe helps you launch, run, and scale your business without the need for additional payment providers.
          </p>
          <button className={styles.ctaButton}>Get started today</button>
        </div>
        <div className={styles.rightImagePlaceholder}>
          {/* Placeholder for the image/illustration */}
        </div>
      </div>
    </section>
  );
};

export default ComponentSix; 