"use client";

import React, { useEffect, useRef } from "react";
import styles from "./DemoHero.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DemoHero: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const firstText = firstTextRef.current;
    const leftColumn = leftColumnRef.current;
    const secondText = secondTextRef.current;
    const section = sectionRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    if (cards && firstText && leftColumn && secondText && section && card1 && card2 && card3 && card4) {
      // Initialize ScrollSmoother
      const smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
      });

      // Calculate the final position
      const firstTextBottom = firstText.getBoundingClientRect().bottom;
      const leftColumnLeft = leftColumn.getBoundingClientRect().left;
      const cardsLeft = cards.getBoundingClientRect().left;
      const xOffset = leftColumnLeft - cardsLeft;
      const yOffset = firstTextBottom - cards.getBoundingClientRect().top;

      // Get initial positions of cards
      const card1Pos = card1.getBoundingClientRect();
      const card2Pos = card2.getBoundingClientRect();
      const card3Pos = card3.getBoundingClientRect();
      const card4Pos = card4.getBoundingClientRect();

      // Calculate swap positions with adjustments
      const card1ToCard4 = {
        x: (card4Pos.left - card1Pos.left) + 10,
        y: (card4Pos.top - card1Pos.top) + 10
      };
      const card2ToCard3 = {
        x: (card3Pos.left - card2Pos.left) + 70, // Move card2 30px closer to card3
        y: (card3Pos.top - card2Pos.top)  + 10   // Move card2 10px up
      };
      const card3ToCard2 = {
        x: (card2Pos.left - card3Pos.left) + 20, // Move card3 10px left
        y: (card2Pos.top - card3Pos.top) - 50    // Move card3 10px up
      };
      const card4ToCard1 = {
        x: (card1Pos.left - card4Pos.left) - 10, // Move card4 10px left
        y: (card1Pos.top - card4Pos.top) -  15
      };

      // Set initial rotation
      gsap.set(cards, { rotation: -8 });

      // Create a timeline for smooth animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: false,
          markers: false,
          onUpdate: (self) => {
            // Update position based on scroll progress
            gsap.set(cards, {
              x: xOffset * self.progress,
              y: yOffset * self.progress,
              rotation: 0 - (-16 * self.progress),
            });

            // Animate card swaps with adjustments
            gsap.set(card1, {
              x: card1ToCard4.x * self.progress,
              y: card1ToCard4.y * self.progress,
            });
            gsap.set(card4, {
              x: card4ToCard1.x * self.progress,
              y: card4ToCard1.y * self.progress,
            });
            gsap.set(card2, {
              x: card2ToCard3.x * self.progress,
              y: card2ToCard3.y * self.progress,
            });
            gsap.set(card3, {
              x: card3ToCard2.x * self.progress,
              y: card3ToCard2.y * self.progress,
            });
          },
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        smoother.kill();
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
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
              <div ref={card1Ref} className={styles.card1}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>💰</span>
                  <span className={styles.cardTitle}>Quarterly Profit</span>
                </div>
                <p className={styles.cardValue}>$1.2M</p>
                <p className={styles.cardChange}>+ 5.2% last quarter</p>
              </div>
              <div ref={card2Ref} className={styles.card2}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>💸</span>
                  <span className={styles.cardTitle}>Expense Report</span>
                </div>
                <p className={styles.cardValue}>$350K</p>
                <p className={styles.cardChange}>- 2.1% last month</p>
              </div>
              <div ref={card3Ref} className={styles.card3}>
                <div className={styles.cardGraph}>
                  <p>Revenue Growth</p>
                  <div className={styles.graphPlaceholder}></div>
                </div>
              </div>
              <div ref={card4Ref} className={styles.card4}>
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
