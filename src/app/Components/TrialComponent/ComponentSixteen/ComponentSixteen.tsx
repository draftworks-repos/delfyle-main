'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ComponentSixteen.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ComponentSixteen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(32); // Default gap in pixels

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateDimensions = () => {
      if (cardsRef.current[0]) {
        const computedStyle = window.getComputedStyle(cardsRef.current[0]);
        setCardWidth(cardsRef.current[0].offsetWidth);
        setGap(parseInt(computedStyle.marginRight) || 32);
      }
    };
    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    
    // GSAP Animations
    const section = sectionRef.current;
    const header = headerRef.current;
    const allCards = cardsRef.current.filter(Boolean);

    if (section && header && allCards.length > 0) {
      gsap.set([header.children, allCards], { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(header.children, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power3.out',
      }).to(allCards, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3');
      
      // Hover Animations
      const eventListeners: { el: HTMLElement; enter: () => void; leave: () => void }[] = [];
      allCards.forEach(card => {
        const onEnter = () => gsap.to(card, { y: -10, boxShadow: '0 15px 25px -10px rgba(0,0,0,0.1)', duration: 0.3, ease: 'power2.out' });
        const onLeave = () => gsap.to(card, { y: 0, boxShadow: 'none', duration: 0.3, ease: 'power2.out' });
        card.addEventListener('mouseenter', onEnter);
        card.addEventListener('mouseleave', onLeave);
        eventListeners.push({ el: card, enter: onEnter, leave: onLeave });
      });

      return () => {
        window.removeEventListener('resize', calculateDimensions);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        eventListeners.forEach(({ el, enter, leave }) => {
          el.removeEventListener('mouseenter', enter);
          el.removeEventListener('mouseleave', leave);
        });
      };
    }

    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

  const cards = [
    {
      title: "In-app payments",
      description: "Use the Mobile Payment Element to build checkout flows in your mobile app. You can style all Elements to match the look and feel of your app and access 100+ global payment methods.",
      image: "/images/payment_app.png"
    },
    {
      title: "Online payments",
      description: "Meet customers wherever they are with a checkout experience built for conversion, no matter the device or payment method.",
      image: "/images/online_payments.png"
    },
    {
      title: "Subscription management",
      description: "Automate billing, invoicing, and revenue recognition for your subscription business. Handle recurring payments with ease.",
      image: "/images/subscription.png"
    },
    {
      title: "Financial services integration",
      description: "Seamlessly integrate with financial services to provide a holistic view of your business finances and operations.",
      image: "/images/financial_services.png"
    },
    {
      title: "Fraud prevention",
      description: "Protect your business from fraudulent transactions with advanced machine learning and risk assessment tools.",
      image: "/images/fraud_prevention.png"
    },
  ];

  const handleNext = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      return newIndex >= cards.length ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? cards.length - 1 : newIndex;
    });
  };

  return (
    <section ref={sectionRef} className={styles.container}>
      <div ref={headerRef} className={styles.headerContainer}>
        <h2 className={styles.mainHeading}>ComponentSixteen</h2>
        <div className={styles.navigationButtons}>
          <button onClick={handlePrev} className={styles.navButton}>&lt;</button>
          <button onClick={handleNext} className={styles.navButton}>&gt;</button>
        </div>
      </div>
      <div className={styles.carouselContainer} ref={carouselRef}>
        <div
          className={styles.cardsWrapper}
          style={{ 
            transform: `translateX(${-currentIndex * (cardWidth + gap)}px)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className={styles.card} ref={el => {
              if (el) cardsRef.current[index] = el;
            }}>
              <div className={styles.imageContainer}>
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  layout="fill" 
                  objectFit="contain" 
                  className={styles.cardImage}
                />
              </div>
              <div className={`${styles.imageContainer} ${styles.textContainer}`}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentSixteen; 