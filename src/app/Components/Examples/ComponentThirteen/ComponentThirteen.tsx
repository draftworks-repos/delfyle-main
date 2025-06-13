import React from 'react';
import styles from './ComponentThirteen.module.css';
import Image from 'next/image';

const ComponentThirteen = () => {
  return (
    <section className={styles.componentThirteenContainer}>
      <div className={styles.mainContentWrapper}>
        <div className={styles.leftColumn}>
          <h2 className={styles.mainHeading}>Ready to work with professional services?</h2>
          <p className={styles.description}>Tell us more about what you're building so we can get started.</p>
          <button className={styles.contactButton}>
            Contact our team <span className={styles.arrowIcon}>&gt;</span>
          </button>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.middleColumn}>
          <div className={styles.iconContainer}>
            {/* Placeholder for icon */}
            <Image src="/icons/explore.svg" alt="Explore Icon" width={50} height={50} />
          </div>
          <h3 className={styles.subHeading}>Explore customer stories</h3>
          <p className={styles.subDescription}>Learn how our professional services team has helped global businesses.</p>
          <a href="#" className={styles.link}>
            See customer stories <span className={styles.arrowIcon}>&gt;</span>
          </a>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.rightColumn}>
          <div className={styles.iconContainer}>
            {/* Placeholder for icon */}
            <Image src="/icons/maximise.svg" alt="Maximise Icon" width={50} height={50} />
          </div>
          <h3 className={styles.subHeading}>Maximise your value</h3>
          <p className={styles.subDescription}>Support plans help resolve issues quickly and provide insights to guide you forward.</p>
          <a href="#" className={styles.link}>
            Compare support plans <span className={styles.arrowIcon}>&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComponentThirteen; 