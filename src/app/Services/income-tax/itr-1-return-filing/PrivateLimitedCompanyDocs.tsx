"use client";

import React, { useEffect, useRef } from 'react';

import styles from './PrivateLimitedCompanyDocs.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PrivateLimitedCompanyDocsProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showButton?: boolean;
  features?: {
    column1: string[];
    column2: string[];
  };
  showFeatures?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  title: "Post-Registration Compliance",
  description: "After incorporation, companies must fulfil compliance obligations such as",
  buttonText: "Contact sales >",
  showButton: true,
  features: {
    column1: [
      "Holding board and shareholder meetings",
      "Maintaining statutory records",
      "Filing annual returns with the ROC",
    ],
    column2: []
  },
  showFeatures: true,
  showTitle: true,
  showDescription: true
};

const PrivateLimitedCompanyDocs: React.FC<PrivateLimitedCompanyDocsProps> = ({
  title = defaultProps.title,
  description = defaultProps.description,
  buttonText = defaultProps.buttonText,
  showButton = defaultProps.showButton,
  features = defaultProps.features,
  showFeatures = defaultProps.showFeatures,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
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

      if (showTitle && titleRef.current) {
        tl.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }

      if (showDescription && descriptionRef.current) {
        tl.from(descriptionRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.4");
      }

      if (showButton && buttonRef.current) {
        tl.from(buttonRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4");
      }

      if (showFeatures) {
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
      }
    }, containerRef);

    return () => ctx.revert();
  }, [showTitle, showDescription, showButton, showFeatures]);

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

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.content}>
        {showTitle && (
          <div className={styles.titleContainer}>
            <h2 ref={titleRef} className={styles.title}>{title}</h2>
          </div>
        )}
        {showDescription && (
          <div className={styles.descriptionContainer}>
            <p ref={descriptionRef} className={styles.description}>
              {description}
            </p>
          </div>
        )}
        {showButton && (
          <button ref={buttonRef} className={styles.button}>{buttonText}</button>
        )}
      </div>
      {showFeatures && (
        <div ref={featuresRef} className={styles.features}>
          <div className={styles.featureColumn}>
            {features.column1.map((feature, index) => (
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
        </div>
      )}
    </div>
  );
};

export default PrivateLimitedCompanyDocs; 