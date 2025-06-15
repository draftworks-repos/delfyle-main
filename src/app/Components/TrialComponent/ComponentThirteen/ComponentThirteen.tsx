"use client";
import React, { useEffect, useRef } from 'react';
import styles from './ComponentThirteen.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ComponentThirteen = () => {
  const containerRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const middleColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const separatorsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const leftColumn = leftColumnRef.current;
    const middleColumn = middleColumnRef.current;
    const rightColumn = rightColumnRef.current;
    const separators = separatorsRef.current.filter(Boolean);

    if (container && leftColumn && middleColumn && rightColumn) {
      // Entrance Animation
      gsap.set(leftColumn, { opacity: 0, y: 50 });
      gsap.set([middleColumn, rightColumn], { opacity: 0, x: -50 });
      gsap.set(separators, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(leftColumn, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
      .to([middleColumn, rightColumn], {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      }, "-=0.3")
      .to(separators, {
        opacity: 1,
        duration: 0.5,
      }, '-=0.5');

      // Hover Animations
      const eventListeners: { el: HTMLElement; enter: () => void; leave: () => void }[] = [];

      const addHoverEffect = (element: HTMLElement) => {
        const onEnter = () => gsap.to(element, { y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.1)', duration: 0.3, ease: 'power2.out' });
        const onLeave = () => gsap.to(element, { y: 0, boxShadow: 'none', duration: 0.3, ease: 'power2.out' });

        element.addEventListener('mouseenter', onEnter);
        element.addEventListener('mouseleave', onLeave);
        eventListeners.push({ el: element, enter: onEnter, leave: onLeave });
      };

      const button = leftColumnRef.current?.querySelector(`.${styles.contactButton}`);
      
      if (middleColumnRef.current) addHoverEffect(middleColumnRef.current);
      if (rightColumnRef.current) addHoverEffect(rightColumnRef.current);
      if (button) addHoverEffect(button as HTMLElement);
      
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        eventListeners.forEach(({ el, enter, leave }) => {
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
        });
      };
    }
  }, []);

  return (
    <section ref={containerRef} className={styles.componentThirteenContainer}>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <h2 className={styles.mainHeading}>ComponentThirteen: Ready to work with professional services?</h2>
          <p className={styles.description}>Tell us more about what you're building so we can get started.</p>
          <button className={styles.contactButton}>
            Contact our team <span className={styles.arrowIcon}>&gt;</span>
          </button>
        </div>

        <div ref={el => { if (el) separatorsRef.current.push(el); }} className={styles.separator}></div>

        <div ref={middleColumnRef} className={styles.middleColumn}>
          <div className={styles.iconContainer}>
            {/* <Image src="/icons/explore.svg" alt="Explore Icon" width={50} height={50} /> */}
          </div>
          <h3 className={styles.subHeading}>Explore customer stories</h3>
          <p className={styles.subDescription}>Learn how our professional services team has helped global businesses.</p>
          <a href="#" className={styles.link}>
            See customer stories <span className={styles.arrowIcon}>&gt;</span>
          </a>
        </div>

        <div ref={el => { if (el) separatorsRef.current.push(el); }} className={styles.separator}></div>

        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div className={styles.iconContainer}>
            {/* <Image src="/icons/maximise.svg" alt="Maximise Icon" width={50} height={50} /> */}
          </div>
          <h3 className={styles.subHeading}>Maximise your value</h3>
          <p className={styles.subDescription}>Support plans help resolve issues quickly and provide insights to guide you forward.</p>
          <a href="#" className={styles.link}>
            Compare support plans <span className={styles.arrowIcon}>&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComponentThirteen; 