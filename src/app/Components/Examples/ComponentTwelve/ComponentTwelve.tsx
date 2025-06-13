import React from 'react';
import styles from './ComponentTwelve.module.css';

const ComponentTwelve: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.mainHeading}>What our customers say about us</h2>
      <p className={styles.mainDescription}>
        Listen to what our happy customers have to say about their experience with our product/service.
      </p>
      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            “Delfyle has transformed how we manage compliance. Their expert guidance made the process seamless and stress-free.”
          </p>
          <p className={styles.author}>— John Doe, CEO of Example Corp</p>
        </div>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            “The team at Delfyle is incredibly responsive and knowledgeable. They've been a true partner in our growth journey.”
          </p>
          <p className={styles.author}>— Jane Smith, Founder of Startup X</p>
        </div>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            “Before Delfyle, compliance was a headache. Now, it's an effortless part of our business operations.”
          </p>
          <p className={styles.author}>— David Lee, Operations Manager at Global Inc.</p>
        </div>
      </div>
    </section>
  );
};

export default ComponentTwelve; 