"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentNine.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface FeatureCard {
  icon?: string;
  title: string;
  description: string;
}

interface ComponentNineProps {
  tagline?: string;
  title?: string;
  description?: string;
  features?: FeatureCard[];
  showTagline?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  tagline: "Get started quickly",
  title: "ComponentNine",
  description: "Our team of experts will help you implement and integrate our solutions into your existing systems, ensuring a smooth transition and maximum efficiency.",
  showTagline: true,
  showTitle: true,
  showDescription: true,
  features: [
    {
      title: "Launch faster",
      description: "Go live with Stripe quickly with our iterative and hands-on approach."
    },
    {
      title: "Design for scale",
      description: "We incorporate the complexities of your business to deliver a custom solution that scales."
    },
    {
      title: "Minimise risk",
      description: "Build once and avoid technology and compliance pitfalls that can delay timelines."
    },
    {
      title: "Unlock more value",
      description: "Discover additional ways to use Stripe to streamline your technology stack."
    }
  ]
};

const ComponentNine: React.FC<ComponentNineProps> = ({
  tagline = defaultProps.tagline,
  title = defaultProps.title,
  description = defaultProps.description,
  features = defaultProps.features,
  showTagline = defaultProps.showTagline,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  const headerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Header animation
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
      }
    });

    // Cards animation
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      });

      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Cleanup
    return () => {
      cardsRef.current.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section className={styles.container}>
      <div ref={headerRef} className={styles.header}>
        {showTagline && <p className={styles.tagline}>{tagline}</p>}
        {showTitle && <h2 className={styles.mainHeading}>{title}</h2>}
        {showDescription && <p className={styles.mainDescription}>{description}</p>}
      </div>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={styles.featureCard}
            ref={el => cardsRef.current[index] = el as HTMLDivElement}
          >
            <div className={styles.icon}>
              {feature.icon && <img src={feature.icon} alt={feature.title} />}
            </div>
            <h3 className={styles.featureHeading}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentNine; 