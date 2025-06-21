"use client";

import React, { useEffect, useRef } from 'react';
import styles from './PrivateLimitedPost.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureCard {
  icon?: string;
  title: string;
  description: string;
}

interface PrivateLimitedPostProps {
  tagline?: string;
  title?: string;
  description?: string;
  features?: FeatureCard[];
  showTagline?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  tagline: "Documents Required",
  title: "Documents Required for Online Company Registration in India",
  description: "Ensure you have all the necessary documents ready for a smooth company registration process.",
  showTagline: true,
  showTitle: true,
  showDescription: true,
  features: [
    {
      icon: undefined,
      title: "For Indian Nationals",
      description: "PAN card, Aadhaar, passport-size photo, proof of identity, and address proof."
    },
    {
      icon: undefined,
      title: "For Foreign Nationals",
      description: "Notarized and apostilled passport, photo, and address proof."
    },
    {
      icon: undefined,
      title: "Registered Office Documents",
      description: "Rental agreement, utility bill, and NOC from property owner."
    }
  ]
};

const PrivateLimitedPost: React.FC<PrivateLimitedPostProps> = ({
  tagline = defaultProps.tagline,
  title = defaultProps.title,
  description = defaultProps.description,
  features = defaultProps.features,
  showTagline = defaultProps.showTagline,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (section && header && cards.length > 0) {
      // Entrance Animation
      gsap.set(header.children, { opacity: 0, y: 40 });
      gsap.set(cards, { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });

      tl.to(header.children, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power3.out'
      }).to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.3');

      // Hover Animations
      const eventListeners: { el: HTMLElement; enter: () => void; leave: () => void }[] = [];
      cards.forEach(card => {
        const onEnter = () => gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
        const onLeave = () => gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        
        card.addEventListener('mouseenter', onEnter);
        card.addEventListener('mouseleave', onLeave);
        eventListeners.push({ el: card, enter: onEnter, leave: onLeave });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        eventListeners.forEach(({ el, enter, leave }) => {
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
        });
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
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
            ref={el => { if (el) cardsRef.current[index] = el; }}
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

export default PrivateLimitedPost; 