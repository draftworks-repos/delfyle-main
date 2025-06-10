"use client";

import React, { useEffect, useRef } from "react";
import styles from "./DemoHero.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DemoHero: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const firstText = firstTextRef.current;
    const leftColumn = leftColumnRef.current;
    const secondText = secondTextRef.current;

    if (cards && firstText && leftColumn && secondText) {
      // Calculate the final position
      const firstTextBottom = firstText.getBoundingClientRect().bottom;
      const leftColumnLeft = leftColumn.getBoundingClientRect().left;
      const cardsLeft = cards.getBoundingClientRect().left;
      const xOffset = leftColumnLeft - cardsLeft;
      const yOffset = firstTextBottom - cards.getBoundingClientRect().top;

      // Set initial rotation
      gsap.set(cards, { rotation: 16 });

      // Create a timeline for smooth animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cards,
          start: "center center",
          end: "+=700",
          scrub: 0.5,
          pin: false,
          markers: false,
          onUpdate: (self) => {
            // Update position based on scroll progress
            gsap.set(cards, {
              x: xOffset * self.progress,
              y: yOffset * self.progress,
              rotation: 0 - (-16 * self.progress), // Start at 8, end at -8
            });
          },
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div ref={leftColumnRef} className={styles.textColumn}>
          <div ref={firstTextRef} className={styles.textContentContainer}>
            <h1 className={styles.mainHeading}>
              Delfyle – Your Business,<br />Hassle-Free
            </h1>
            <p className={styles.subHeading}>
              Delfyle is the dedicated filing, compliance, and legal services arm of a reputed startup incubator, while also operating as an independent legal and compliance consultancy. We serve as the CA, CS, and legal backbone for early-stage and growth-stage startups, offering complete regulatory support under one roof.
            </p>
            {/* <div className={styles.buttonsContainer}>
              <button className={styles.primaryButton}>
                Get a free consultation.
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.playIcon}>▶</span> See our case studies
              </button>
            </div> */}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div ref={cardsRef} className={styles.imageColumn}>
            <div className={styles.cardsContainer}>
              <div className={styles.card1}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>💰</span>
                  <span className={styles.cardTitle}>Quarterly Profit</span>
                </div>
                <p className={styles.cardValue}>$1.2M</p>
                <p className={styles.cardChange}>+ 5.2% last quarter</p>
              </div>
              <div className={styles.card2}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>💸</span>
                  <span className={styles.cardTitle}>Expense Report</span>
                </div>
                <p className={styles.cardValue}>$350K</p>
                <p className={styles.cardChange}>- 2.1% last month</p>
              </div>
              <div className={styles.card3}>
                <div className={styles.cardGraph}>
                  <p>Revenue Growth</p>
                  <div className={styles.graphPlaceholder}></div>
                </div>
              </div>
              <div className={styles.card4}>
                <p>Financial Advisors</p>
                <div className={styles.profileAvatars}>
                  <div className={styles.avatar}></div>
                  <div className={styles.avatar}></div>
                  <div className={styles.avatar}></div>
                  <div className={styles.avatar}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.textColumn}>
            <div ref={secondTextRef} className={styles.textContentContainer}>
              <h1 className={styles.mainHeading}>
                But we don't stop there!
              </h1>
              <p className={styles.subHeading}>
                Delfyle also caters to established corporates, enterprises, and government bodies looking to outsource their legal and compliance operations for greater efficiency and reduced overhead.
              </p>
              {/* <div className={styles.buttonsContainer}>
                <button className={styles.primaryButton}>
                  Start your journey.
                </button>
                <button className={styles.secondaryButton}>
                  <span className={styles.playIcon}>▶</span> Watch demo
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;
