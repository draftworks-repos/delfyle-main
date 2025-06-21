"use client";

import React, { useEffect, useRef } from 'react';
import styles from '../../../Components/TrialComponent/ComponentSeven/ComponentSeven.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyDocuments: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const checkmarkRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const featureTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });

      if (titleRef.current) {
        tl.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }

      if (descriptionRef.current) {
        tl.from(descriptionRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4");
      }

      const featureItems = featureTextRefs.current.map((text, index) => {
        return text && checkmarkRefs.current[index] ? [text, checkmarkRefs.current[index]] : [];
      }).flat().filter(Boolean);
      
      if (featureItems.length > 0) {
        tl.from(featureItems, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.2");
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !checkmarkRefs.current.includes(el)) {
      checkmarkRefs.current.push(el);
    }
  };

  const addTextToRefs = (el: HTMLParagraphElement | null) => {
    if (el && !featureTextRefs.current.includes(el)) {
      featureTextRefs.current.push(el);
    }
  };

  // Documents required data
  const documentsData = {
    column1: [
      "For Indian Nationals: PAN card, Aadhaar, passport-size photo, proof of identity, and address proof.",
      "For Foreign Nationals: Notarized and apostilled passport, photo, and address proof."
    ],
    column2: [
      "Registered Office Documents: Rental agreement, utility bill, and NOC from property owner.",
      "Additional Requirements: Bank statements, business plan, and director consent forms."
    ]
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h2 ref={titleRef} className={styles.title}>
            Documents Required for Online Company Registration in India
          </h2>
        </div>
        <div className={styles.descriptionContainer}>
          <p ref={descriptionRef} className={styles.description}>
            Ensure you have all the necessary documents ready before starting your company registration process. Our team will guide you through document verification and submission.
          </p>
        </div>
      </div>
      <div ref={featuresRef} className={styles.features}>
        <div className={styles.featureColumn}>
          {documentsData.column1.map((feature, index) => (
            <p 
              key={`col1-${index}`} 
              ref={addTextToRefs}
              className={styles.featureItem}
            >
              <span ref={addToRefs} className={styles.checkmark}>✓</span>
              {feature}
            </p>
          ))}
        </div>
        <div className={styles.featureColumn}>
          {documentsData.column2.map((feature, index) => (
            <p 
              key={`col2-${index}`} 
              ref={addTextToRefs}
              className={styles.featureItem}
            >
              <span ref={addToRefs} className={styles.checkmark}>✓</span>
              {feature}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivateLimitedCompanyDocuments; 