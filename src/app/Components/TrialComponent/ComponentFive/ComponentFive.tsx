"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './ComponentFive.module.css';

const ComponentFive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const cards = [
    {
      title: "Professional services",
      description: "Integrate Stripe faster and with fewer people, with the help of our in-house payments and financial services experts. Our team supports compliance of regulatory requirements and data security standards.",
    },
    {
      title: "Services partners",
      description: "Engage a certified Stripe partner to help with strategy, implementation, deployment, global expansion, or managed services for your Stripe solution.",
    },
    {
      title: "Another Service 1",
      description: "This is a placeholder for the third service, demonstrating the three-card layout. You can replace this text with relevant content.",
    },
    {
      title: "Another Service 2",
      description: "This is a placeholder for the fourth service, demonstrating the three-card layout. You can replace this text with relevant content.",
    },
    {
      title: "Another Service 3",
      description: "This is a placeholder for the fifth service, demonstrating the three-card layout. You can replace this text with relevant content.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1; // Slide one card at a time
      const lastPossibleIndex = cards.length - 1; // Index to show the last card

      if (newIndex > lastPossibleIndex) {
        return 0; // Loop back to start
      }
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - 1; // Slide one card at a time
      const lastPossibleIndex = cards.length - 1; // Index to show the last card

      if (newIndex < 0) {
        return lastPossibleIndex; // Loop to show the last card
      }
      return newIndex;
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.mainHeading}>ComponentFive</h2>
        <div className={styles.navigationButtons}>
          <button onClick={handlePrev} className={styles.navButton}>&lt;</button>
          <button onClick={handleNext} className={styles.navButton}>&gt;</button>
        </div>
      </div>
      <div className={styles.carouselContainer} ref={carouselRef}>
        <div
          className={styles.cardsWrapper}
          style={{ transform: `translateX(${-currentIndex * (cardsRef.current[0]?.offsetWidth + 32 || 0)}px)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className={styles.card} ref={el => {
              if (el) cardsRef.current[index] = el;
            }}>
              <div className={styles.cardHeader}></div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <a href="#" className={styles.learnMore}>Learn more &gt;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentFive; 