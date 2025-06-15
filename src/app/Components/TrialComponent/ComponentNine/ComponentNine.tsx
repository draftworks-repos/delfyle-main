"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentNine.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
      icon: undefined,
      title: "Launch faster",
      description: "Go live with Stripe quickly with our iterative and hands-on approach."
    },
    {
      icon: undefined,
      title: "Design for scale",
      description: "We incorporate the complexities of your business to deliver a custom solution that scales."
    },
    {
      icon: undefined,
      title: "Minimise risk",
      description: "Build once and avoid technology and compliance pitfalls that can delay timelines."
    },
    {
      icon: undefined,
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
        const onEnter = () => gsap.to(card, { y: -10, boxShadow: '0 15px 25px -10px rgba(0,0,0,0.1)', duration: 0.3, ease: 'power2.out' });
        const onLeave = () => gsap.to(card, { y: 0, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', duration: 0.3, ease: 'power2.out' });
        
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

export default ComponentNine; 