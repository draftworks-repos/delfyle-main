import React from 'react';
import styles from './ComponentTwo.module.css';

const ComponentTwo = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.mainHeading}>ComponentTwo</h2>

      <div className={styles.contentWrapper}>
        <div className={styles.leftCard}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Technical account<br />management</h3>
            <p className={styles.cardDescription}>
              Reach your goals faster with proactive
              <br /> engagement from Stripe's technical experts.
            </p>
            <a href="#" className={styles.learnMore}>Learn more &gt;</a>
          </div>
          <div className={styles.globeBackground}></div> {/* Placeholder for globe image */}
        </div>

        <div className={styles.rightCard}>
          <div className={styles.testimonialLogo}></div> {/* Placeholder for Nord Security logo */}
          <p className={styles.testimonialQuote}>
            "Enterprise Support has absolutely helped
            us optimise processing and and reduce
            declines. Working closely with a technical
            account manager gives us the opportunity
            to ask more questions and get detailed
            answers, faster."
          </p>
          <p className={styles.testimonialAuthor}>Kes Saulis, Head of Payments</p>
        </div>
      </div>
    </section>
  );
};

export default ComponentTwo; 