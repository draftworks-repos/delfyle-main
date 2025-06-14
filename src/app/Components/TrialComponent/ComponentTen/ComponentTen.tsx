import React from 'react';
import styles from './ComponentTen.module.css';

const ComponentTen: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <p className={styles.subHeading}>Optimise and grow</p>
          <h2 className={styles.mainHeading}>ComponentTen</h2>
          <p className={styles.description}>
            From strengthening your current integration to expanding overseas to launching new business models, our professional services team provides the right guidance at the right time to help you build on your existing Stripe solution.
          </p>
          <div className={styles.solutionSection}>
            <div className={styles.solutionIcon}>
              {/* Icon will be added here */}
            </div>
            <p className={styles.solutionText}>Optimise and adapt your Stripe solution</p>
          </div>
          <p className={styles.solutionDescription}>
            Our advisory services allow you to quickly adapt to changing customer behaviour, reduce costs, improve authorisation, and minimise fraud, by focusing on:
          </p>
          <ul className={styles.featureList}>
            <li><span className={styles.checkIcon}>✔</span> UI/UX changes to optimise the checkout flow</li>
            <li><span className={styles.checkIcon}>✔</span> Best practices for payment method presentation</li>
            <li><span className={styles.checkIcon}>✔</span> One-click checkout experiences with Link</li>
            <li><span className={styles.checkIcon}>✔</span> Implementing new subscription and billing models</li>
            <li><span className={styles.checkIcon}>✔</span> A/B testing to optimise costs and authorisation in different markets</li>
          </ul>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.shapeOne}></div>
          <div className={styles.shapeTwo}></div>
          <div className={styles.shapeThree}></div>
        </div>
      </div>
    </section>
  );
};

export default ComponentTen; 