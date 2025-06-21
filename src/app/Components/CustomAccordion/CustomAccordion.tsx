"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './CustomAccordion.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  stepNumber?: number;
  icon?: string;
}

export interface CustomAccordionProps {
  title: string;
  subheading?: string;
  description?: string;
  items: AccordionItem[];
  theme?: 'light' | 'dark';
  variant?: 'numbered' | 'icon' | 'simple';
  maxOpenItems?: number;
  className?: string;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  subheading,
  description,
  items,
  theme = 'light',
  variant = 'numbered',
  maxOpenItems = 1,
  className = ''
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const accordions = accordionRefs.current.filter((item): item is HTMLDivElement => item !== null);

    if (section && accordions.length > 0) {
      // Initial state for accordion items
      gsap.set(accordions, {
        y: 30,
        opacity: 0,
        scale: 0.95
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

      // Animate accordion items with stagger
      tl.to(accordions, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // Add hover animations
      accordions.forEach((accordion) => {
        const header = accordion.querySelector(`.${styles.accordionHeader}`);
        
        if (header) {
          header.addEventListener('mouseenter', () => {
            gsap.to(accordion, {
              y: -5,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              duration: 0.3,
              ease: "power2.out"
            });
          });

          header.addEventListener('mouseleave', () => {
            gsap.to(accordion, {
              y: 0,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [items]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      if (maxOpenItems === 1) {
        // Single accordion behavior
        return prev.includes(itemId) ? [] : [itemId];
      } else {
        // Multiple accordion behavior
        if (prev.includes(itemId)) {
          return prev.filter(id => id !== itemId);
        } else {
          if (prev.length >= maxOpenItems) {
            // Remove the oldest item if we've reached the limit
            return [...prev.slice(1), itemId];
          }
          return [...prev, itemId];
        }
      }
    });
  };

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      accordionRefs.current[index] = el;
    }
  };

  const renderIcon = (item: AccordionItem, index: number) => {
    if (variant === 'numbered') {
      return (
        <div className={styles.stepNumber}>
          {item.stepNumber || index + 1}
        </div>
      );
    } else if (variant === 'icon' && item.icon) {
      return (
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{item.icon}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.container} ${styles[`theme--${theme}`]} ${className}`}
    >
      <div className={styles.header}>
        {subheading && (
          <p className={styles.subHeading}>{subheading}</p>
        )}
        <h2 className={styles.mainHeading}>{title}</h2>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>

      <div className={styles.accordionContainer}>
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => addToRefs(el, index)}
            className={`${styles.accordionItem} ${openItems.includes(item.id) ? styles.open : ''}`}
          >
            <button
              className={styles.accordionHeader}
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItems.includes(item.id)}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div className={styles.headerContent}>
                {renderIcon(item, index)}
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>
              <div className={`${styles.chevron} ${openItems.includes(item.id) ? styles.rotated : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
            
            <div
              id={`accordion-content-${item.id}`}
              className={`${styles.accordionContent} ${openItems.includes(item.id) ? styles.expanded : ''}`}
              aria-hidden={!openItems.includes(item.id)}
            >
              <div className={styles.contentInner}>
                <p className={styles.contentText}>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomAccordion; 