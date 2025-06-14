"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentEight.module.css';
import Button from '../../Button/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  type: 'online-event' | 'report' | 'guide';
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface ComponentEightProps {
  title?: string;
  description?: string;
  cards?: CardItem[];
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  title: "ComponentEight",
  description: "Market insights, trends, and reports to keep you on the cutting edge of financial technology.",
  showTitle: true,
  showDescription: true,
  cards: [
    {
      type: 'online-event',
      title: "How Zoom and Wix build exceptional customer experiences in a fast-paced market",
      description: "Hear how enterprise executives are overcoming institutional risk aversion, brittle systems, and a bias toward the status quo to foster an innovative culture.",
      buttonText: "Watch the talk",
      buttonLink: "#"
    },
    {
      type: 'report',
      title: "Four ways modern payment systems drive growth",
      description: "Learn how brands like Toyota, Alaska Airlines, and River Island are transforming their payments strategy to stay competitive.",
      buttonText: "Read the report",
      buttonLink: "#"
    },
    {
      type: 'guide',
      title: "Guide to payments provider RFPs",
      description: "Evaluate payment providers, including overlooked capabilities and important questions to ask, and get a downloadable RFP template.",
      buttonText: "Download the guide",
      buttonLink: "#"
    },
    {
      type: 'report',
      title: "How to increase revenue with an optimised checkout",
      description: "Read about how businesses using Stripe's Optimized Checkout Suite achieved 11.9% more revenue on average.",
      buttonText: "Read the report",
      buttonLink: "#"
    },
    {
      type: 'report',
      title: "Stripe named a Leader in Payments",
      description: "According to the IDC MarketScape evaluation, \"merchants of all sizes can benefit from Stripe's wide range of products and services.\"",
      buttonText: "Read the report",
      buttonLink: "#"
    },
    {
      type: 'report',
      title: "Stripe named a Leader in Billing",
      description: "According to The Forrester Wave™, \"Along with Stripe Payments' synergies, Stripe Billing's architecture and reliability are its key strengths.\"",
      buttonText: "Read the report",
      buttonLink: "#"
    }
  ]
};

const getIconForType = (type: CardItem['type']) => {
  switch (type) {
    case 'online-event':
      return '▶';
    case 'report':
    case 'guide':
      return '🗐';
    default:
      return '🗐';
  }
};

const getTypeLabel = (type: CardItem['type']) => {
  switch (type) {
    case 'online-event':
      return 'Online event';
    case 'report':
      return 'Report';
    case 'guide':
      return 'Guide';
    default:
      return 'Report';
  }
};

const ComponentEight: React.FC<ComponentEightProps> = ({
  title = defaultProps.title,
  description = defaultProps.description,
  cards = defaultProps.cards,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (section && cards.length > 0) {
      // Initial states
      gsap.set([header, cards], {
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

      // Animate header entrance
      if (header) {
        tl.to(header, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
      }

      // Animate cards entrance
      tl.to(cards, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.5"); // Start slightly before header animation ends

      // Add hover animations for each card
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
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
      <div ref={headerRef} className={styles.header}>
        {showTitle && <h2 className={styles.mainHeading}>{title}</h2>}
        {showDescription && <p className={styles.mainDescription}>{description}</p>}
      </div>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={styles.card}
            ref={el => {
              if (el) cardsRef.current[index] = el;
            }}
          >
          <div className={styles.cardTag}>
              <span className={styles.tagIcon}>{getIconForType(card.type as CardItem['type'])}</span> {getTypeLabel(card.type as CardItem['type'])}
          </div>
            <h3 className={styles.cardHeading}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <Button
              type="smallWhatWeDoButton"
              text={card.buttonText}
              onClick={() => window.location.href = card.buttonLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentEight; 