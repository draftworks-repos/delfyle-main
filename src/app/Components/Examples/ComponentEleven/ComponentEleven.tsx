import React from 'react';
import styles from './ComponentEleven.module.css';

const ComponentEleven: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <p className={styles.subHeading}>Build for the future</p>
          <h2 className={styles.mainHeading}>Strategy and transformation</h2>
          <p className={styles.description}>
            Our strategy and transformation team provides thought leadership and business transformation expertise to create a vision and shared roadmap for enterprise-wide adoption of the Stripe platform.
          </p>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Uncover insights</h3>
              <p className={styles.featureDescription}>
                Explore opportunities through customer research, data analysis, customer interviews, and industry trends.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Identify solutions</h3>
              <p className={styles.featureDescription}>
                Workshop ideas and identify new solutions and improvements that align with your long-term goals.
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Deliver outcomes</h3>
              <p className={styles.featureDescription}>
                Define, align, and commit to actionable shared roadmaps with implementation plans that enable teams to execute.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.circleGraphic}>
            <p className={styles.circleText}>Build for the future</p>
          </div>
          {/* Placeholder for lines and other small icons */}
        </div>
      </div>
    </section>
  );
};

export default ComponentEleven; 