import React from 'react';
import Image from 'next/image';
import styles from './ComponentTwelve.module.css';

const ComponentTwelve: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topAnchorContainer}>
        <a href="#" className={styles.topAnchorLink}>Case studies</a> {/* Anchor Tag changed to Case studies */}
      </div>
      <div className={styles.mainContentWrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 className={styles.mainHeading}>ComponentTwelve: Snowflake partners with Stripe experts to launch marketplace in four months</h2>
          </div>
          <div className={styles.leftBottomContainer}>
            <h3 className={styles.subContentHeading}>Challenge</h3>
            <p className={styles.paragraphContent}>
              Snowflake sought to create a B2B marketplace for its customers. Eager to move quickly and be first-to-market, Snowflake turned to Stripe for additional expertise to guide its technical approach, as well as subject matter expertise in topics such as regulation and compliance, to expedite the process.
            </p>

            <h3 className={styles.subContentHeading}>Solution</h3>
            <p className={styles.paragraphContent}>
              Snowflake partnered with Stripe professional services team for expertise and guidance throughout their implementation. Stripe provided product workshops, ongoing Q&A sessions, and weekly check-ins to keep the Snowflake team unblocked and moving efficiently. As a result, Snowflake successfully launched their marketplace in just four months.
            </p>

            <h3 className={styles.subContentHeading}>Products</h3>
            <div className={styles.productsGrid}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Connect</li>
                <li><span className={styles.checkIcon}>✔</span> Billing</li>
              </ul>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Payments</li>
                <li><span className={styles.checkIcon}>✔</span> Invoicing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              Snowflake is a cloud data platform that enables data storage, processing, and analytics solutions for businesses. With the Data Cloud platform, Snowflake manages the complexities of data storage infrastructure, enabling organisations to focus on building data-driven solutions.
            </p>
          </div>
          <div className={styles.rightBottomContainer}>
            <Image 
              src="/images/snowflake-logo.png" 
              alt="Snowflake Logo" 
              width={180} 
              height={50} 
              objectFit="contain"
              className={styles.companyLogo}
            />
            <p className={styles.bottomQuote}>
              “Partnering with Stripe professional services team enabled us to quickly create a unique marketplace experience with consumption-based pricing options for our customers. We not only created a product we're happy with and customers are finding value from, but through the partnership we were able to execute quickly and effectively.”
            </p>
            <p className={styles.bottomAuthor}>Eric Dorf, Senior Product Manager, Monetisation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentTwelve; 