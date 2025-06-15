"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentTen.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ComponentTen: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const floatingAnimationRef = useRef<gsap.core.Tween | null>(null);
  const listItemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    const listItems = listItemsRef.current;

    if (section && leftColumn && rightColumn) {
      // Initial states
      gsap.set(leftColumn.children, {
        opacity: 0,
        y: 30
      });

      gsap.set(rightColumn, {
        opacity: 0,
        x: 50
      });

      // Set initial state for list items
      gsap.set(listItems, {
        opacity: 0,
        x: -20
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
      .to(rightColumn, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.4")
      .to(listItems, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.7)"
      }, "-=0.2");

      // Add subtle continuous motion to right column
      floatingAnimationRef.current = gsap.to(rightColumn, {
        y: "+=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Hover animations for both columns
      const handleLeftColumnHover = () => {
        gsap.to(leftColumn, {
          y: -15,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleLeftColumnLeave = () => {
        gsap.to(leftColumn, {
          y: 0,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleRightColumnHover = () => {
        // Pause the floating animation
        floatingAnimationRef.current?.pause();
        
        gsap.to(rightColumn, {
          y: -15,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleRightColumnLeave = () => {
        gsap.to(rightColumn, {
          y: 0,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            // Resume the floating animation after hover animation completes
            floatingAnimationRef.current?.play();
          }
        });
      };

      // Add event listeners
      leftColumn.addEventListener('mouseenter', handleLeftColumnHover);
      leftColumn.addEventListener('mouseleave', handleLeftColumnLeave);
      rightColumn.addEventListener('mouseenter', handleRightColumnHover);
      rightColumn.addEventListener('mouseleave', handleRightColumnLeave);

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        leftColumn.removeEventListener('mouseenter', handleLeftColumnHover);
        leftColumn.removeEventListener('mouseleave', handleLeftColumnLeave);
        rightColumn.removeEventListener('mouseenter', handleRightColumnHover);
        rightColumn.removeEventListener('mouseleave', handleRightColumnLeave);
        floatingAnimationRef.current?.kill();
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <p className={styles.subHeading}>Optimise and grow</p>
          <h2 className={styles.mainHeading}>ComponentTen</h2>
          <p className={styles.description}>
            From strengthening your current integration to expanding overseas to launching new business models, our professional services team provides the right guidance at the right time to help you build on your existing Stripe solution.
          </p>
          <div className={styles.solutionSection}>
            <div className={styles.solutionIcon}>
              {/* Icon will be added here */}
            </div>
            <p className={styles.solutionText}>Optimise and adapt your Stripe solution</p>
          </div>
          <p className={styles.solutionDescription}>
            Our advisory services allow you to quickly adapt to changing customer behaviour, reduce costs, improve authorisation, and minimise fraud, by focusing on:
          </p>
          <ul className={styles.featureList}>
            <li ref={el => { if (el) listItemsRef.current[0] = el }}><span className={styles.checkIcon}>✔</span> UI/UX changes to optimise the checkout flow</li>
            <li ref={el => { if (el) listItemsRef.current[1] = el }}><span className={styles.checkIcon}>✔</span> Best practices for payment method presentation</li>
            <li ref={el => { if (el) listItemsRef.current[2] = el }}><span className={styles.checkIcon}>✔</span> One-click checkout experiences with Link</li>
            <li ref={el => { if (el) listItemsRef.current[3] = el }}><span className={styles.checkIcon}>✔</span> Implementing new subscription and billing models</li>
            <li ref={el => { if (el) listItemsRef.current[4] = el }}><span className={styles.checkIcon}>✔</span> A/B testing to optimise costs and authorisation in different markets</li>
          </ul>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div className={styles.shapeOne}></div>
          <div className={styles.shapeTwo}></div>
          <div className={styles.shapeThree}></div>
        </div>
      </div>
    </section>
  );
};

export default ComponentTen; 