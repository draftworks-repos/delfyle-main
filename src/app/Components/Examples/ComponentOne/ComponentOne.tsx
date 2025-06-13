import React from 'react';
import styles from './ComponentOne.module.css';

const ComponentOne = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.mainHeading}>
        ComponentOne
      </h2>
      <p className={styles.mainDescription}>
        Access leading authorisation rates powered by direct integrations with global card
        networks and issuing banks, an extensive understanding of issuer preferences, and
        machine learning-based products informed by billions of transactions.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.iconPlaceholder}></div>
          <h3 className={styles.cardTitle}>Lifecycle management</h3>
          <p className={styles.cardDescription}>
            Generate additional revenue with <span>network tokens</span> and <span>card account
            updater</span> which help increase authorisation rates and reduce churn.
          </p>
          <a href="#" className={styles.learnMore}>Learn more &gt;</a>
        </div>

        <div className={styles.card}>
          <div className={styles.iconPlaceholder}></div>
          <h3 className={styles.cardTitle}>Smart routing and revenue recovery</h3>
          <p className={styles.cardDescription}>
            Mitigate revenue loss and increase auth rates by 50-70 bps on average
            with <span>Adaptive Acceptance</span>, which automatically identifies and executes
            optimal <span>retry messaging</span> and smart routing combinations for card
            payments.
          </p>
          <a href="#" className={styles.learnMore}>See how &gt;</a>
        </div>

        <div className={styles.card}>
          <div className={styles.iconPlaceholder}></div>
          <h3 className={styles.cardTitle}>Issuer and network partnerships</h3>
          <p className={styles.cardDescription}>
            Businesses see an up to 8% reduction in fraud and 1-2% authorisation
            rate uplift on eligible volume via our <span>Enhanced Issuer Network</span>.
          </p>
          <a href="#" className={styles.learnMore}>Learn more &gt;</a>
        </div>

        <div className={styles.card}>
          <div className={styles.iconPlaceholder}></div>
          <h3 className={styles.cardTitle}>Optimised authentication</h3>
          <p className={styles.cardDescription}>
            Speed up checkout with customisable solutions to help you meet <span>SCA
            requirements</span> and <span>delegated authentication</span> that dynamically adapts
            2FA methods to suit customers' preferences.
          </p>
          <a href="#" className={styles.learnMore}>See how &gt;</a>
        </div>
      </div>
    </section>
  );
};

export default ComponentOne; 