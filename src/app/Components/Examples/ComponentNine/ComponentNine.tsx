import React from 'react';
import styles from './ComponentNine.module.css';

const ComponentNine = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.mainHeading}>ComponentNine</h2>
        <p className={styles.mainDescription}>
          Our team of experts will help you implement and integrate our solutions into your existing systems, ensuring a smooth transition and maximum efficiency.
        </p>
      </div>
      <p className={styles.tagline}>Get started quickly</p>
      <div className={styles.grid}>
        <div className={styles.featureCard}>
          <div className={styles.icon}>
            {/* <img src="/icons/launch_faster.svg" alt="Launch faster" /> */}
          </div>
          <h3 className={styles.featureHeading}>Launch faster</h3>
          <p className={styles.featureDescription}>
            Go live with Stripe quickly with our iterative and hands-on
            approach.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.icon}>
            {/* <img src="/icons/design_for_scale.svg" alt="Design for scale" /> */}
          </div>
          <h3 className={styles.featureHeading}>Design for scale</h3>
          <p className={styles.featureDescription}>
            We incorporate the complexities of your business to deliver a
            custom solution that scales.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.icon}>
            {/* <img src="/icons/minimize_risk.svg" alt="Minimise risk" /> */}
          </div>
          <h3 className={styles.featureHeading}>Minimise risk</h3>
          <p className={styles.featureDescription}>
            Build once and avoid technology and compliance pitfalls that can
            delay timelines.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.icon}>
            {/* <img src="/icons/unlock_more_value.svg" alt="Unlock more value" /> */}
          </div>
          <h3 className={styles.featureHeading}>Unlock more value</h3>
          <p className={styles.featureDescription}>
            Discover additional ways to use Stripe to streamline your
            technology stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComponentNine; 