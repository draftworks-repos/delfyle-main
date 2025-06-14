"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentTen.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ComponentTen: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shapeOneRef = useRef<HTMLDivElement>(null);
  const shapeTwoRef = useRef<HTMLDivElement>(null);
  const shapeThreeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const shapeOne = shapeOneRef.current;
    const shapeTwo = shapeTwoRef.current;
    const shapeThree = shapeThreeRef.current;

    if (section && shapeOne && shapeTwo && shapeThree) {
      // Initial states
      gsap.set([shapeOne, shapeTwo, shapeThree], {
        opacity: 0,
        y: 100
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

      // Animate shapes entrance
      tl.to(shapeOne, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(shapeTwo, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7")
      .to(shapeThree, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7");

      // Add continuous floating animation
      gsap.to([shapeOne, shapeTwo, shapeThree], {
        y: "+=20",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
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
            <li><span className={styles.checkIcon}>✔</span> UI/UX changes to optimise the checkout flow</li>
            <li><span className={styles.checkIcon}>✔</span> Best practices for payment method presentation</li>
            <li><span className={styles.checkIcon}>✔</span> One-click checkout experiences with Link</li>
            <li><span className={styles.checkIcon}>✔</span> Implementing new subscription and billing models</li>
            <li><span className={styles.checkIcon}>✔</span> A/B testing to optimise costs and authorisation in different markets</li>
          </ul>
        </div>
        <div className={styles.rightColumn}>
          <div ref={shapeOneRef} className={styles.shapeOne}></div>
          <div ref={shapeTwoRef} className={styles.shapeTwo}></div>
          <div ref={shapeThreeRef} className={styles.shapeThree}></div>
        </div>
      </div>
    </section>
  );
};

export default ComponentTen; 