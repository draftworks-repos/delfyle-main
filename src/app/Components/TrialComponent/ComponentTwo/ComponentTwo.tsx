"use client";

import React, { useEffect, useRef } from 'react';
import styles from './ComponentTwo.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../Button/Button';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ComponentTwoProps {
  mainHeading?: string;
  leftCard?: {
    title: string;
    description: string;
    learnMoreLink: string;
  };
  rightCard?: {
    testimonialLogo?: string;
    quote: string;
    author: string;
  };
}

const defaultProps = {
  mainHeading: "ComponentTwo",
  leftCard: {
    title: "Technical account management",
    description: "Reach your goals faster with proactive engagement from technical experts.",
    learnMoreLink: "#"
  },
  rightCard: {
    testimonialLogo: "",
    quote: "Enterprise Support has absolutely helped us optimise processing and reduce declines. Working closely with a technical account manager gives us the opportunity to ask more questions and get detailed answers, faster.",
    author: "Kes Saulis, Head of Payments"
  }
};

const ComponentTwo: React.FC<ComponentTwoProps> = ({
  mainHeading = defaultProps.mainHeading,
  leftCard = defaultProps.leftCard,
  rightCard = defaultProps.rightCard
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const learnMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftCard = leftCardRef.current;
    const rightCard = rightCardRef.current;
    const globe = globeRef.current;
    const learnMore = learnMoreRef.current;

    if (section && leftCard && rightCard && globe && learnMore) {
      // Initial states
      gsap.set([leftCard, rightCard], {
        y: 50,
        opacity: 0
      });

      gsap.set(globe, {
        scale: 0.5,
        opacity: 0,
        rotation: -45
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

      // Animate cards entrance
      tl.to([leftCard, rightCard], {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Animate globe
      tl.to(globe, {
        scale: 1,
        opacity: 0.8,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.8");

      // Create a complex looping animation for the globe
      const globeTimeline = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power1.inOut" }
      });

      globeTimeline
        .to(globe, {
          rotation: 15,
          scale: 1.1,
          duration: 2
        })
        .to(globe, {
          rotation: -15,
          scale: 0.9,
          duration: 2
        })
        .to(globe, {
          rotation: 15,
          scale: 1.05,
          duration: 2
        })
        .to(globe, {
          rotation: -15,
          scale: 0.95,
          duration: 2
        });

      // Add cursor following animation
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;

      leftCard.addEventListener('mousemove', (e) => {
        const rect = leftCard.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      });

      // Smooth follow animation
      gsap.ticker.add(() => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        gsap.set(globe, {
          x: currentX,
          y: currentY
        });
      });

      // Add hover animation to learn more button
      learnMore.addEventListener('mouseenter', () => {
        gsap.to(learnMore, {
          x: 10,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      learnMore.addEventListener('mouseleave', () => {
        gsap.to(learnMore, {
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      // Add hover animation for right card
      rightCard.addEventListener('mouseenter', () => {
        gsap.to(rightCard, {
          y: -20,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      rightCard.addEventListener('mouseleave', () => {
        gsap.to(rightCard, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      // Add parallax effect to right card
      gsap.to(rightCard, {
        y: -20,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <h2 className={styles.mainHeading}>{mainHeading}</h2>

      <div className={styles.contentWrapper}>
        <div ref={leftCardRef} className={styles.leftCard}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{leftCard.title}</h3>
            <p className={styles.cardDescription}>
              {leftCard.description}
            </p>
            <div ref={learnMoreRef}>
              <Button 
                type="smallWhatWeDoButton" 
                text="Learn more"
                onClick={() => window.location.href = leftCard.learnMoreLink}
              />
            </div>
          </div>
          <div ref={globeRef} className={styles.globeBackground}></div>
        </div>

        <div ref={rightCardRef} className={styles.rightCard}>
          {rightCard.testimonialLogo && (
            <div className={styles.testimonialLogo} style={{ backgroundImage: `url(${rightCard.testimonialLogo})` }}></div>
          )}
          <p className={styles.testimonialQuote}>
            {rightCard.quote}
          </p>
          <p className={styles.testimonialAuthor}>{rightCard.author}</p>
        </div>
      </div>
    </section>
  );
};

export default ComponentTwo; 