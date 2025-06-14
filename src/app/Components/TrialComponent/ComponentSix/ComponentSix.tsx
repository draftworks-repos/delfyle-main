import React from 'react';
import styles from './ComponentSix.module.css';

const ComponentSix = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <h2 className={styles.mainHeading}>ComponentSix</h2>
          <p className={styles.mainDescription}>
            Simplify operations and centralise reporting across
            <br/>business lines and geographies with Stripe
            <br/>Organisations.
          </p>
          <button className={styles.ctaButton}>Get started &gt;</button>
        </div>
        <div className={styles.rightContentPlaceholder}>
          <div className={styles.blankDiffContainer}>
            {/* Blank diff color container */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentSix; 