"use client";

import React from 'react';
import styles from './ComponentFour.module.css';
import Button from '../../Button/Button';

interface Card {
  title?: string;
  description?: string;
  learnMoreLink?: string;
  showLearnMore?: boolean;
}

interface ComponentFourProps {
  mainHeading?: string;
  cards?: Card[];
  showMainHeading?: boolean;
}

const defaultProps = {
  mainHeading: "ComponentFour",
  cards: [
    {
      title: "Card Four - Item 1",
      description: "This is the first card for the new ComponentFour. It will be part of a three-card static display.",
      learnMoreLink: "#",
      showLearnMore: true
    },
    {
      title: "Card Four - Item 2",
      description: "This is the second card for the new ComponentFour. Designed to be square and styled like ComponentThree cards.",
      learnMoreLink: "#",
      showLearnMore: true
    },
    {
      title: "Card Four - Item 3",
      description: "This is the third card for the new ComponentFour. It will be part of the static display.",
      learnMoreLink: "#",
      showLearnMore: true
    }
  ],
  showMainHeading: true
};

const ComponentFour: React.FC<ComponentFourProps> = ({
  mainHeading = defaultProps.mainHeading,
  cards = defaultProps.cards,
  showMainHeading = defaultProps.showMainHeading
}) => {
  return (
    <section className={styles.container}>
      {showMainHeading && <h2 className={styles.mainHeading}>{mainHeading}</h2>}
      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}></div>
            {card.title && <h3 className={styles.cardTitle}>{card.title}</h3>}
            {card.description && <p className={styles.cardDescription}>{card.description}</p>}
            {card.showLearnMore && (
              <Button 
                type="smallWhatWeDoButton" 
                text="Learn more"
                onClick={() => window.location.href = card.learnMoreLink || "#"}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentFour; 