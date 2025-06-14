"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentFour.module.css';
import Button from '../../Button/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards.length > 0) {
      // Initial states
      gsap.set(cards, {
        y: 50,
        opacity: 0
      });

      // Create timeline for entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate cards entrance
      tl.to(cards, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Add hover animations for each card
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      {showMainHeading && <h2 className={styles.mainHeading}>{mainHeading}</h2>}
      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={styles.card}
            ref={el => {
              if (el) cardsRef.current[index] = el;
            }}
          >
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