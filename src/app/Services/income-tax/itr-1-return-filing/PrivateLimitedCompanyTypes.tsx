"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyTypes: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    const featureItems = featureItemsRef.current.filter(Boolean); // Ensure no nulls
    const circleGraphic = circleGraphicRef.current;

    if (section && leftColumn && rightColumn && circleGraphic) {
      // Initial states
      gsap.set(leftColumn.children, {
        opacity: 0,
        y: 30
      });

      gsap.set(rightColumn.children, {
        opacity: 0,
        scale: 0.8
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

      // Animate left column content with stagger
      tl.to(leftColumn.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
      .to(rightColumn.children, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.4");

      // Animate feature items with a slight delay
      gsap.to(featureItems, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
      });

      const handleCircleHover = () => {
        gsap.to(circleGraphic, {
          y: -10,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleCircleLeave = () => {
        gsap.to(circleGraphic, {
          y: 0,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      // Add event listeners for circle
      circleGraphic.addEventListener('mouseenter', handleCircleHover);
      circleGraphic.addEventListener('mouseleave', handleCircleLeave);
      
      // Add hover animations for each feature item
      const itemListeners: { el: HTMLElement; enter: () => void; leave: () => void }[] = [];
      featureItems.forEach(item => {
        const onEnter = () => gsap.to(item, { y: -10, scale: 1.025, duration: 0.3, ease: 'power2.out' });
        const onLeave = () => gsap.to(item, { y: 0, scale: 1, boxShadow: 'none', duration: 0.3, ease: 'power2.out' });
        
        item.addEventListener('mouseenter', onEnter);
        item.addEventListener('mouseleave', onLeave);
        itemListeners.push({ el: item, enter: onEnter, leave: onLeave });
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        circleGraphic.removeEventListener('mouseenter', handleCircleHover);
        circleGraphic.removeEventListener('mouseleave', handleCircleLeave);
        itemListeners.forEach(({ el, enter, leave }) => {
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
        });
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <p className={styles.subHeading}>Company Registration Guide</p>
          <h2 className={styles.mainHeading}>Types of Private Limited Companies</h2>
          <p className={styles.description}>
            Understanding the different types of private limited companies and their requirements is crucial for making the right choice for your business structure in India.
          </p>

          <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}>🏢</div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Company Limited by Shares</h3>
              <p className={styles.featureDescription}>
                Shareholders' liability is limited to their shareholding. This is the most common type of private limited company structure.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}>🛡️</div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Company Limited by Guarantee</h3>
              <p className={styles.featureDescription}>
                Members provide a financial guarantee in case of winding up. Often used by non-profit organizations and professional associations.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}>⚖️</div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Unlimited Company</h3>
              <p className={styles.featureDescription}>
                No limit on members' liability, but the entity remains legally distinct. Rarely used due to unlimited liability exposure.
              </p>
            </div>
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={circleGraphicRef} className={styles.circleGraphic}>
            <p className={styles.circleText}>Pvt. Ltd. Types</p>
          </div>
          {/* Placeholder for lines and other small icons */}
        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyTypes; 