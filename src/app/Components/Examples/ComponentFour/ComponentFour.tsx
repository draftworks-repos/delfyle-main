"use client";

import React from 'react';
import styles from './ComponentFour.module.css';

const ComponentFour = () => {

  const cards = [
    {
      title: "Card Four - Item 1",
      description: "This is the first card for the new ComponentFour. It will be part of a three-card static display.",
    },
    {
      title: "Card Four - Item 2",
      description: "This is the second card for the new ComponentFour. Designed to be square and styled like ComponentThree cards.",
    },
    {
      title: "Card Four - Item 3",
      description: "This is the third card for the new ComponentFour. It will be part of the static display.",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.mainHeading}>ComponentFour</h2>
      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}></div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <a href="#" className={styles.learnMore}>Learn more &gt;</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentFour; 