"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ComponentTwelve: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const topAnchorRef = useRef<HTMLAnchorElement>(null);
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const leftBottomContentRef = useRef<(HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement)[]>([]);
  const rightColumnContentRef = useRef<HTMLDivElement[]>([]);
  const leftBottomContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const topAnchor = topAnchorRef.current;
    const mainHeading = mainHeadingRef.current;
    const leftBottomContent = leftBottomContentRef.current.filter(Boolean);
    const rightColumnContent = rightColumnContentRef.current.filter(Boolean);

    if (section && topAnchor && mainHeading) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.set([topAnchor, mainHeading, ...leftBottomContent], { opacity: 0, y: 30 });
      gsap.set(rightColumnContent, { opacity: 0, x: 50 });

      tl.to(topAnchor, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
        .to(mainHeading, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .to(leftBottomContent, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        }, '-=0.5')
        .to(rightColumnContent, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
        }, '-=0.5');

      // --- Hover Animations ---

      const eventListeners: { el: HTMLElement; type: string; func: () => void }[] = [];

      // Right column containers hover
      const rightTopContainer = rightColumnContent[0];
      const rightBottomContainer = rightColumnContent[1];

      const addCardHover = (element: HTMLDivElement) => {
        const onEnter = () => gsap.to(element, { y: -10, boxShadow: '0 15px 25px -10px rgba(0, 0, 0, 0.1)', duration: 0.3, ease: 'power2.out' });
        const onLeave = () => gsap.to(element, { y: 0, boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)', duration: 0.3, ease: 'power2.out' });
        
        element.addEventListener('mouseenter', onEnter);
        element.addEventListener('mouseleave', onLeave);
        eventListeners.push({ el: element, type: 'mouseenter', func: onEnter });
        eventListeners.push({ el: element, type: 'mouseleave', func: onLeave });
      };

      if (rightTopContainer) addCardHover(rightTopContainer);
      if (rightBottomContainer) addCardHover(rightBottomContainer);

      // Left column grouped hover
      const leftContentPairs = [
        [leftBottomContent[0], leftBottomContent[1]],
        [leftBottomContent[2], leftBottomContent[3]],
        [leftBottomContent[4], leftBottomContent[5]],
      ];

      const addPairHover = (pair: (HTMLElement | undefined)[]) => {
        if (!pair[0] || !pair[1]) return;
        const onEnter = () => gsap.to(pair, { scale: 1.03, duration: 0.3, ease: 'power2.out' });
        const onLeave = () => gsap.to(pair, { scale: 1, duration: 0.3, ease: 'power2.out' });

        pair.forEach(el => {
          if (el) {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
            eventListeners.push({ el, type: 'mouseenter', func: onEnter });
            eventListeners.push({ el, type: 'mouseleave', func: onLeave });
          }
        });
      };

      leftContentPairs.forEach(addPairHover);

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        eventListeners.forEach(({ el, type, func }) => el.removeEventListener(type, func));
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.topAnchorContainer}>
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Case studies</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>ComponentTwelve: Snowflake partners with Stripe experts to launch marketplace in four months</h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>Challenge</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
              Snowflake sought to create a B2B marketplace for its customers. Eager to move quickly and be first-to-market, Snowflake turned to Stripe for additional expertise to guide its technical approach, as well as subject matter expertise in topics such as regulation and compliance, to expedite the process.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>Solution</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
              Snowflake partnered with Stripe professional services team for expertise and guidance throughout their implementation. Stripe provided product workshops, ongoing Q&A sessions, and weekly check-ins to keep the Snowflake team unblocked and moving efficiently. As a result, Snowflake successfully launched their marketplace in just four months.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Products</h3>
            <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Connect</li>
                <li><span className={styles.checkIcon}>✔</span> Billing</li>
              </ul>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Payments</li>
                <li><span className={styles.checkIcon}>✔</span> Invoicing</li>
              </ul>
            </div>
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              Snowflake is a cloud data platform that enables data storage, processing, and analytics solutions for businesses. With the Data Cloud platform, Snowflake manages the complexities of data storage infrastructure, enabling organisations to focus on building data-driven solutions.
            </p>
          </div>
          <div ref={el => { if (el) rightColumnContentRef.current[1] = el }} className={styles.rightBottomContainer}>
            <Image 
              src="/images/snowflake-logo.png" 
              alt="Snowflake Logo" 
              width={180} 
              height={50} 
              objectFit="contain"
              className={styles.companyLogo}
            />
            <p className={styles.bottomQuote}>
              “Partnering with Stripe professional services team enabled us to quickly create a unique marketplace experience with consumption-based pricing options for our customers. We not only created a product we're happy with and customers are finding value from, but through the partnership we were able to execute quickly and effectively.”
            </p>
            <p className={styles.bottomAuthor}>Eric Dorf, Senior Product Manager, Monetisation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentTwelve; 