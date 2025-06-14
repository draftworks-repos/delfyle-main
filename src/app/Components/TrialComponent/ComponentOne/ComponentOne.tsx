"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentOne.module.css';
import Button from '../../Button/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ComponentOne = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);

    if (section && cards.length > 0) {
      // Initial state for cards
      gsap.set(cards, {
        y: 50,
        opacity: 0,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        zIndex: 1
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

      // Animate cards with stagger
      tl.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Add hover animations
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            zIndex: 1,
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

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section ref={sectionRef} className={styles.container}>
      <h2 className={styles.mainHeading}>
        ComponentOne
      </h2>
      <p className={styles.mainDescription}>
        Access leading authorisation rates powered by direct integrations with global card
        networks and issuing banks, an extensive understanding of issuer preferences, and
        machine learning-based products informed by billions of transactions.
      </p>

      <div className={styles.grid}>
        <div ref={(el) => addToRefs(el, 0)} className={styles.card}>
          <div className={styles.iconPlaceholder}></div>
          <h3 className={styles.cardTitle}>Lifecycle management</h3>
          <p className={styles.cardDescription}>
            Generate additional revenue with <span>network tokens</span> and <span>card account
            updater</span> which help increase authorisation rates and reduce churn.
          </p>
          <Button text="Learn more" type="smallWhatWeDoButton" />
        </div>

        <div ref={(el) => addToRefs(el, 1)} className={styles.card}>
          <div className={styles.iconPlaceholder}></div>
          <h3 className={styles.cardTitle}>Smart routing and revenue recovery</h3>
          <p className={styles.cardDescription}>
            Mitigate revenue loss and increase auth rates by 50-70 bps on average
            with <span>Adaptive Acceptance</span>, which automatically identifies and executes
            optimal <span>retry messaging</span> and smart routing combinations for card
            payments.
          </p>
          <Button text="See how" type="smallWhatWeDoButton" />
        </div>

        <div ref={(el) => addToRefs(el, 2)} className={styles.card}>
          <div className={styles.iconPlaceholder}></div>
          <h3 className={styles.cardTitle}>Issuer and network partnerships</h3>
          <p className={styles.cardDescription}>
            Businesses see an up to 8% reduction in fraud and 1-2% authorisation
            rate uplift on eligible volume via our <span>Enhanced Issuer Network</span>.
          </p>
          <Button text="Learn more" type="smallWhatWeDoButton" />
        </div>

        <div ref={(el) => addToRefs(el, 3)} className={styles.card}>
          <div className={styles.iconPlaceholder}></div>
          <h3 className={styles.cardTitle}>Optimised authentication</h3>
          <p className={styles.cardDescription}>
            Speed up checkout with customisable solutions to help you meet <span>SCA
            requirements</span> and <span>delegated authentication</span> that dynamically adapts
            2FA methods to suit customers' preferences.
          </p>
          <Button text="See how" type="smallWhatWeDoButton" />
        </div>
      </div>
    </section>
  );
};

export default ComponentOne; 