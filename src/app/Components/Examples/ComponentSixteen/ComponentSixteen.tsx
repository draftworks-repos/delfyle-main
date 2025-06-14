'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './ComponentSixteen.module.css'; // Updated CSS import

const ComponentSixteen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const cards = [
    {
      title: "In-app payments",
      description: "Use the Mobile Payment Element to build checkout flows in your mobile app. You can style all Elements to match the look and feel of your app and access 100+ global payment methods.",
      image: "/images/payment_app.png"
    },
    {
      title: "Online payments",
      description: "Meet customers wherever they are with a checkout experience built for conversion, no matter the device or payment method.",
      image: "/images/online_payments.png"
    },
    {
      title: "Subscription management",
      description: "Automate billing, invoicing, and revenue recognition for your subscription business. Handle recurring payments with ease.",
      image: "/images/subscription.png"
    },
    {
      title: "Financial services integration",
      description: "Seamlessly integrate with financial services to provide a holistic view of your business finances and operations.",
      image: "/images/financial_services.png"
    },
    {
      title: "Fraud prevention",
      description: "Protect your business from fraudulent transactions with advanced machine learning and risk assessment tools.",
      image: "/images/fraud_prevention.png"
    },
  ];

  const handleNext = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1; // Slide next one card
      const lastPossibleIndex = cards.length - 1; // Index to show the last card

      if (newIndex > lastPossibleIndex) {
        return 0; // Loop back to start
      }
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - 1; // Slide previous one card
      const lastPossibleIndex = cards.length - 1; // Index to show the last card

      if (newIndex < 0) {
        return Math.max(0, lastPossibleIndex); // Loop to show the last card
      }
      return newIndex;
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.mainHeading}>ComponentSixteen</h2> {/* Updated heading */}
        <div className={styles.navigationButtons}>
          <button onClick={handlePrev} className={styles.navButton}>&#8592;</button>
          <button onClick={handleNext} className={styles.navButton}>&#8594;</button>
        </div>
      </div>
      <div className={styles.carouselContainer} ref={carouselRef}>
        <div
          className={styles.cardsWrapper}
          style={{ transform: `translateX(${-currentIndex * (carouselRef.current?.offsetWidth || 0)}px)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className={styles.card} ref={el => {
              if (el) cardsRef.current[index] = el;
            }}>
              <div className={styles.imageContainer}>
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  layout="fill" 
                  objectFit="contain" 
                  className={styles.cardImage}
                />
              </div>
              <div className={`${styles.imageContainer} ${styles.textContainer}`}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentSixteen; 