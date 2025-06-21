"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../Components/TrialComponent/ComponentTwelve/ComponentTwelve.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivateLimitedCompanyContent: React.FC = () => {
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
        const onEnter = () => gsap.to(element, { y: -10, duration: 0.3, ease: 'power2.out' });
        const onLeave = () => gsap.to(element, { y: 0, duration: 0.3, ease: 'power2.out' });
        
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
        <a href="#" ref={topAnchorRef} className={styles.topAnchorLink}>Company Registration</a>
      </div>
      <div className={styles.mainContentWrapper}>
        <div ref={leftColumnRef} className={styles.leftColumn}>
          <div className={styles.leftTopContainer}>
            <h2 ref={mainHeadingRef} className={styles.mainHeading}>Private Limited Company Registration in India with Delfyle</h2>
          </div>
          <div ref={leftBottomContainerRef} className={styles.leftBottomContainer}>
            <h3 ref={el => { if (el) leftBottomContentRef.current[0] = el }} className={styles.subContentHeading}>What is a Private Limited Company?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[1] = el }} className={styles.paragraphContent}>
              A private limited company is a privately held business entity with limited liability, making it one of the most preferred business structures in India. Its advantages include liability protection, ease of formation and maintenance, and recognition as a distinct legal entity.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[2] = el }} className={styles.subContentHeading}>Why Choose Private Limited Company?</h3>
            <p ref={el => { if (el) leftBottomContentRef.current[3] = el }} className={styles.paragraphContent}>
              Setting up a business in India often involves choosing a private limited company as a preferred option. This structure offers shareholders limited liability protection while placing specific ownership constraints. In contrast, in the case of an LLP, partners oversee the management. Private limited company registration allows for a clear distinction between directors and shareholders.
            </p>

            <h3 ref={el => { if (el) leftBottomContentRef.current[4] = el }} className={styles.subContentHeading}>Key Characteristics</h3>
            <div ref={el => { if (el) leftBottomContentRef.current[5] = el }} className={styles.productsGrid}>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Limited Liability Protection</li>
                <li><span className={styles.checkIcon}>✔</span> Separate Legal Entity</li>
                <li><span className={styles.checkIcon}>✔</span> Minimum 2 Shareholders</li>
              </ul>
              <ul className={styles.productsList}>
                <li><span className={styles.checkIcon}>✔</span> Restricted Share Transfer</li>
                <li><span className={styles.checkIcon}>✔</span> No Public Investment</li>
                <li><span className={styles.checkIcon}>✔</span> Compliance Requirements</li>
              </ul>
            </div>
          </div>
        </div>
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div ref={el => { if (el) rightColumnContentRef.current[0] = el }} className={styles.rightTopContainer}>
            <p className={styles.rightDescription}>
              At Delfyle, we provide cost-effective solutions for company registration in India, ensuring a seamless and legally compliant process. From startup incorporation to online company registration, our expert team manages all legal formalities under the Ministry of Corporate Affairs (MCA) regulations.
            </p>
          </div>
          <div ref={el => { if (el) rightColumnContentRef.current[1] = el }} className={styles.rightBottomContainer}>
            <Image 
              src="/delfyle-logo/delfyle-logo.png" 
              alt="Delfyle Logo" 
              width={180} 
              height={50} 
              objectFit="contain"
              className={styles.companyLogo}
            />
            <p className={styles.bottomQuote}>
              "Shareholders are liable only to the extent of their shareholding, ensuring personal assets remain protected. The company has its own legal identity, capable of owning property, signing contracts, and initiating legal actions."
            </p>
            <p className={styles.bottomAuthor}>Ministry of Corporate Affairs (MCA)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLimitedCompanyContent; 