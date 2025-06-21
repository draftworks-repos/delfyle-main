"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentEleven/ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyDisadvantages: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    const featureItems = featureItemsRef.current.filter(Boolean);
    const circleGraphic = circleGraphicRef.current;

    if (section && leftColumn && rightColumn && circleGraphic) {
      gsap.set(leftColumn.children, {
        opacity: 0,
        y: 30
      });

      gsap.set(rightColumn.children, {
        opacity: 0,
        scale: 0.8
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

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

      circleGraphic.addEventListener('mouseenter', handleCircleHover);
      circleGraphic.addEventListener('mouseleave', handleCircleLeave);
      
      const itemListeners: { el: HTMLElement; enter: () => void; leave: () => void }[] = [];
      featureItems.forEach(item => {
        const onEnter = () => gsap.to(item, { y: -10, scale: 1.025, duration: 0.3, ease: 'power2.out' });
        const onLeave = () => gsap.to(item, { y: 0, scale: 1, boxShadow: 'none', duration: 0.3, ease: 'power2.out' });
        
        item.addEventListener('mouseenter', onEnter);
        item.addEventListener('mouseleave', onLeave);
        itemListeners.push({ el: item, enter: onEnter, leave: onLeave });
      });

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
          <p className={styles.subHeading}>Considerations</p>
          <h2 className={styles.mainHeading}>Disadvantages of a Private Limited Company</h2>
          <p className={styles.description}>
            While private limited companies offer many benefits, it's important to understand the potential drawbacks and compliance requirements before making a decision.
          </p>

          <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}>📋</div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Regulatory Compliance</h3>
              <p className={styles.featureDescription}>
                Requires strict adherence to corporate regulations, including annual filings, board meetings, and statutory compliance with MCA.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}>💸</div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Higher Setup Costs</h3>
              <p className={styles.featureDescription}>
                More expensive than proprietorship or partnership firms. Includes registration fees, compliance costs, and professional services.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}>📊</div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Public Disclosure</h3>
              <p className={styles.featureDescription}>
                Financial statements are publicly accessible through MCA portal. Limited privacy compared to other business structures.
              </p>
            </div>
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={circleGraphicRef} className={styles.circleGraphic}>
            <p className={styles.circleText}>Considerations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyDisadvantages; 