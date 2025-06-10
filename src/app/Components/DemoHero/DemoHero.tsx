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
      const secondTextTop = secondText.getBoundingClientRect().top;
      const leftColumnLeft = leftColumn.getBoundingClientRect().left;
      const cardsLeft = cards.getBoundingClientRect().left;
      const xOffset = leftColumnLeft - cardsLeft;
      const yOffset = firstTextBottom - cards.getBoundingClientRect().top;

      gsap.to(cards, {
        scrollTrigger: {
          trigger: cards,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          toggleActions: "play reverse play reverse",
        },
        x: xOffset,
        y: yOffset,
        duration: 1,
        ease: "none",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div ref={leftColumnRef} className={styles.textColumn}>
          <div ref={firstTextRef} className={styles.textContentContainer}>
            <h1 className={styles.mainHeading}>
              Unlock insights with <br /> financial analytics.
            </h1>
            <p className={styles.subHeading}>
              Maximize your investments with detailed financial reports. Develop
              data-driven strategies for sustainable growth.
            </p>
            <div className={styles.buttonsContainer}>
              <button className={styles.primaryButton}>
                Get a free consultation.
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.playIcon}>▶</span> See our case studies
              </button>
            </div>
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
                Unlock insights with <br /> financial analytics.
              </h1>
              <p className={styles.subHeading}>
                Maximize your investments with detailed financial reports. Develop
                data-driven strategies for sustainable growth.
              </p>
              <div className={styles.buttonsContainer}>
                <button className={styles.primaryButton}>
                  Start your journey.
                </button>
                <button className={styles.secondaryButton}>
                  <span className={styles.playIcon}>▶</span> Watch demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;
