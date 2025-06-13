import React from 'react';
import styles from './ComponentEight.module.css';

const ComponentEight = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.mainHeading}>Recommended resources</h2>
        <p className={styles.mainDescription}>
          Market insights, trends, and reports to keep you on the cutting edge of financial
          technology.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardTag}>
            <span className={styles.tagIcon}>▶</span> Online event
          </div>
          <h3 className={styles.cardHeading}>How Zoom and Wix build exceptional<br/>customer experiences in a fast-paced market</h3>
          <p className={styles.cardDescription}>
            Hear how enterprise executives are overcoming institutional risk aversion,
            brittle systems, and a bias toward the status quo to foster an innovative culture.
          </p>
          <a href="#" className={styles.cardLink}>Watch the talk ›</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTag}>
            <span className={styles.tagIcon}>🗐</span> Report
          </div>
          <h3 className={styles.cardHeading}>Four ways modern payment systems<br/>drive growth</h3>
          <p className={styles.cardDescription}>
            Learn how brands like Toyota, Alaska Airlines, and River Island are transforming
            their payments strategy to stay competitive.
          </p>
          <a href="#" className={styles.cardLink}>Read the report ›</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTag}>
            <span className={styles.tagIcon}>🗐</span> Guide
          </div>
          <h3 className={styles.cardHeading}>Guide to payments provider RFPs</h3>
          <p className={styles.cardDescription}>
            Evaluate payment providers, including overlooked capabilities and important
            questions to ask, and get a downloadable RFP template.
          </p>
          <a href="#" className={styles.cardLink}>Download the guide ›</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTag}>
            <span className={styles.tagIcon}>🗐</span> Report
          </div>
          <h3 className={styles.cardHeading}>How to increase revenue with an<br/>optimised checkout</h3>
          <p className={styles.cardDescription}>
            Read about how businesses using Stripe's Optimized Checkout Suite achieved 11.9%
            more revenue on average.
          </p>
          <a href="#" className={styles.cardLink}>Read the report ›</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTag}>
            <span className={styles.tagIcon}>🗐</span> Report
          </div>
          <h3 className={styles.cardHeading}>Stripe named a Leader in Payments</h3>
          <p className={styles.cardDescription}>
            According to the IDC MarketScape evaluation, "merchants of all sizes can
            benefit from Stripe's wide range of products and services."
          </p>
          <a href="#" className={styles.cardLink}>Read the report ›</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTag}>
            <span className={styles.tagIcon}>🗐</span> Report
          </div>
          <h3 className={styles.cardHeading}>Stripe named a Leader in Billing</h3>
          <p className={styles.cardDescription}>
            According to The Forrester Wave™, "Along with Stripe Payments' synergies, Stripe
            Billing's architecture and reliability are its key strengths."
          </p>
          <a href="#" className={styles.cardLink}>Read the report ›</a>
        </div>
      </div>
    </section>
  );
};

export default ComponentEight; 