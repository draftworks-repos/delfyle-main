"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentSeven.module.css';
import gsap from 'gsap';

interface ComponentSevenProps {
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
  title: "ComponentSeven",
  description: "Speak to an expert for tailored solutions and custom pricing for your business.",
  buttonText: "Contact sales >",
  showButton: true,
  features: {
    column1: [
      "Interchange plus pricing",
      "Country-specific rates",
      "Deployment services",
      "Custom payment flows"
    ],
    column2: [
      "Volume discounts",
      "Multi-product discounts",
      "Technical account management",
      "Dedicated support team"
    ]
  },
  showFeatures: true,
  showTitle: true,
  showDescription: true
};

const ComponentSeven: React.FC<ComponentSevenProps> = ({
  title = defaultProps.title,
  description = defaultProps.description,
  buttonText = defaultProps.buttonText,
  showButton = defaultProps.showButton,
  features = defaultProps.features,
  showFeatures = defaultProps.showFeatures,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const checkmarkRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const featureTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

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
          // Animate each feature item with its checkmark
          featureTextRefs.current.forEach((text, index) => {
            const checkmark = checkmarkRefs.current[index];
            if (text && checkmark) {
              tl.from([text, checkmark], {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
              }, "-=0.3")
              .to(checkmark, {
                scale: 1.2,
                duration: 0.2,
                ease: "back.out(1.7)"
              })
              .to(checkmark, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
              });
            }
          });
        }
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
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
    <div className={styles.container}>
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
          <div className={styles.featureColumn}>
            {features.column2.map((feature, index) => (
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
      )}
    </div>
  );
};

export default ComponentSeven; 