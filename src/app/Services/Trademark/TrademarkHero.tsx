'use client';

import React, { useEffect, useRef } from "react";
import styles from "./TrademarkHero.module.css";
import Button from '../../Components/Button/Button';
import gsap from "gsap";

const wavePath1 = "M0,160 C320,240 480,80 800,160 L800,320 L0,320 Z";
const wavePath2 = "M0,120 C320,200 480,40 800,120 L800,320 L0,320 Z";

const TrademarkHero = () => {
  const waveRef = useRef<SVGPathElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        attr: { d: wavePath2 },
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          y: -progress * 120, // elevate up to 120px as you scroll
          boxShadow: `0 ${progress * 32}px ${32 + progress * 32}px rgba(0,0,0,${0.10 + progress * 0.15})`,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.gridBg} />
        <div className={styles.radialBg} />
        <svg className={styles.waveBg} viewBox="0 0 800 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E2148" />
              <stop offset="100%" stopColor="#0A5EB0" />
            </linearGradient>
          </defs>
          <path
            ref={waveRef}
            d={wavePath1}
            fill="url(#waveGradient)"
            opacity="0.7"
          />
        </svg>
        <div className={styles.centerContent}>
          <div className={styles.TtxtContent}>
            <h1 className={styles.heading}>Trademark Registration</h1>
            <p className={styles.description}>
              Within the competitive business realm, a product is frequently distinguished by its brand name and the distinctive elements that set it apart. These elements, ranging from logos and jingles to packaging design, collectively constitute what we refer to as a trademark. In today's digital era, safeguarding your brand identity has gained even greater significance. Whether you are launching a startup, managing an established business, or embarking on the entrepreneurial path as an individual, trademark registration online remains a vital step to guarantee the uniqueness and distinctiveness of your products and services.
            </p>
            <div className={styles.buttonRow}>
              <Button type="whiteButtonWithBackground" text="Get Started" />
              <Button type="whiteButtonWithBackground" text="Learn More" />
            </div>
          </div>
          <img
            ref={imgRef}
            className={styles.heroImage}
            src={"/Backgrounds/hero-image.png"}
            alt="Tablet showing trademark registration"
            draggable={false}
          />
        </div>
      </section>
    </div>
  );
};

export default TrademarkHero; 