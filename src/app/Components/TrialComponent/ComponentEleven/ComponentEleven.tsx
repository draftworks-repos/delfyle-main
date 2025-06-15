"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentEleven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ComponentEleven: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const featureItemsRef = useRef<HTMLDivElement[]>([]);
  const circleGraphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    const featureItems = featureItemsRef.current;
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
        delay: 0.4
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

      // Add event listeners
      circleGraphic.addEventListener('mouseenter', handleCircleHover);
      circleGraphic.addEventListener('mouseleave', handleCircleLeave);

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        circleGraphic.removeEventListener('mouseenter', handleCircleHover);
        circleGraphic.removeEventListener('mouseleave', handleCircleLeave);
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <p className={styles.subHeading}>Build for the future</p>
          <h2 className={styles.mainHeading}>ComponentEleven</h2>
          <p className={styles.description}>
            Our strategy and transformation team provides thought leadership and business transformation expertise to create a vision and shared roadmap for enterprise-wide adoption of the Stripe platform.
          </p>

          <div ref={el => { if (el) featureItemsRef.current[0] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Uncover insights</h3>
              <p className={styles.featureDescription}>
                Explore opportunities through customer research, data analysis, customer interviews, and industry trends.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[1] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Identify solutions</h3>
              <p className={styles.featureDescription}>
                Workshop ideas and identify new solutions and improvements that align with your long-term goals.
              </p>
            </div>
          </div>

          <div ref={el => { if (el) featureItemsRef.current[2] = el }} className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <div className={styles.featureTextContent}>
              <h3 className={styles.featureHeading}>Deliver outcomes</h3>
              <p className={styles.featureDescription}>
                Define, align, and commit to actionable shared roadmaps with implementation plans that enable teams to execute.
              </p>
            </div>
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={circleGraphicRef} className={styles.circleGraphic}>
            <p className={styles.circleText}>Build for the future</p>
          </div>
          {/* Placeholder for lines and other small icons */}
        </div>
      </div>
    </section>
  );
};

export default ComponentEleven; 