"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './ComponentFive.module.css';
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

interface ComponentFiveProps {
  mainHeading?: string;
  showMainHeading?: boolean;
  cards?: Card[];
  showNavigation?: boolean;
}

const defaultProps = {
  mainHeading: "ComponentFive",
  showMainHeading: true,
  showNavigation: true,
  cards: [
    {
      title: "Card Five - Item 1",
      description: "This is the first card for the new ComponentFive. It will be part of a carousel display.",
      learnMoreLink: "#",
      showLearnMore: true
    },
    {
      title: "Card Five - Item 2",
      description: "This is the second card for the new ComponentFive. Designed to be part of the carousel.",
      learnMoreLink: "#",
      showLearnMore: true
    },
    {
      title: "Card Five - Item 3",
      description: "This is the third card for the new ComponentFive. It will be part of the carousel display.",
      learnMoreLink: "#",
      showLearnMore: true
    },
    {
      title: "Card Five - Item 4",
      description: "This is the fourth card for the new ComponentFive. Adding more content to the carousel.",
      learnMoreLink: "#",
      showLearnMore: true
    },
    {
      title: "Card Five - Item 5",
      description: "This is the fifth card for the new ComponentFive. Completing the carousel set.",
      learnMoreLink: "#",
      showLearnMore: true
    }
  ]
};

const ComponentFive: React.FC<ComponentFiveProps> = ({
  mainHeading = defaultProps.mainHeading,
  showMainHeading = defaultProps.showMainHeading,
  showNavigation = defaultProps.showNavigation,
  cards = defaultProps.cards
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const updateCardRefs = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? cards.length - 1 : newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= cards.length ? 0 : newIndex;
    });
  };

  // Carousel animation effect
  useEffect(() => {
    if (cardsWrapperRef.current) {
      const cardWidth = cardRefs.current[0]?.offsetWidth || 0;
      const gap = 32; // 2rem gap
      const offset = currentIndex * (cardWidth + gap);
      cardsWrapperRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [currentIndex, cards.length]);

  // GSAP animations
  useEffect(() => {
    const section = sectionRef.current;
    const currentCards = cardRefs.current.filter(Boolean) as HTMLDivElement[]; // Filter out nulls

    if (section && currentCards.length > 0) {
      // Measure and set equal height for all cards
      let maxHeight = 0;
      currentCards.forEach(card => {
        if (card) {
          maxHeight = Math.max(maxHeight, card.offsetHeight);
        }
      });
      currentCards.forEach(card => {
        if (card) {
          card.style.height = `${maxHeight}px`;
        }
      });

      // Initial states for cards
      gsap.set(currentCards, {
        y: 50,
        opacity: 0
      });

      // Create timeline for cards entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate cards entrance
      tl.to(currentCards, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Add hover animations for each card
      currentCards.forEach(card => {
        if (card) {
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
        }
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [cards.length]); // Re-run when number of cards changes

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.headerContainer}>
        {showMainHeading && <h2 className={styles.mainHeading}>{mainHeading}</h2>}
        {showNavigation && (
        <div className={styles.navigationButtons}>
            <button className={styles.navButton} onClick={handlePrevClick}>
              &lt;
            </button>
            <button className={styles.navButton} onClick={handleNextClick}>
              &gt;
            </button>
        </div>
        )}
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.cardsWrapper} ref={cardsWrapperRef}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => updateCardRefs(el, index)}
            >
              <div className={styles.cardHeader}></div>
              {card.title && <h3 className={styles.cardTitle}>{card.title}</h3>}
              {card.description && (
              <p className={styles.cardDescription}>{card.description}</p>
              )}
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
      </div>
    </section>
  );
};

export default ComponentFive; 