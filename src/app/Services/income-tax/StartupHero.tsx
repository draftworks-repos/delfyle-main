'use client';

import React, { useState, useRef, useEffect } from "react";
import styles from "./StartupHero.module.css";

const fullDescription = `Setting up a business in India often involves choosing a private limited company as a preferred option. This structure offers shareholders limited liability protection while placing specific ownership constraints. In contrast, in the case of an LLP, partners oversee the management. Private limited company registration allows for a clear distinction between directors and shareholders.`;

const StartupHero = () => {
  const [hovered, setHovered] = useState(false);
  const [displayedWords, setDisplayedWords] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const descInnerRef = useRef<HTMLParagraphElement>(null);
  const descWrapperRef = useRef<HTMLDivElement>(null);

  const words = fullDescription.split(' ');
  const half = Math.ceil(words.length / 2);

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setDisplayedWords((prev) => {
          if (prev < words.length) {
            return prev + 1;
          } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return prev;
          }
        });
      }, 60);
    } else {
      setDisplayedWords(half);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovered]);

  useEffect(() => {
    setDisplayedWords(half);
  }, []);

  useEffect(() => {
    if (descWrapperRef.current && descInnerRef.current) {
      const scrollHeight = descInnerRef.current.scrollHeight;
      descWrapperRef.current.style.height = scrollHeight + 'px';
    }
  }, [displayedWords]);

  const descText = words.slice(0, displayedWords).join(' ') + (displayedWords < words.length ? '...' : '');

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.heroSection}>
        <video
          className={styles.videoBg}
          src={"/Backgrounds/golden-lines.mp4"}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.container}>
          <div className={styles.left}>
            <div
              className={styles.leftContentWrapper}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h1 className={styles.heading}>
                <span className={styles.coloredplc}>Private Limited Company</span><br />
                <span className={styles.coloredreg}>Registration</span> in India <br /> with <span className={styles.colored}>Delfyle</span>
              </h1>
              <div
                className={styles.descWrapper}
                ref={descWrapperRef}
                style={{
                  overflow: 'hidden',
                  transition: 'height 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)',
                }}
              >
                <p
                  className={styles.description}
                  ref={descInnerRef}
                  style={{
                    opacity: hovered ? 1 : 0.8,
                    transition: 'opacity 0.3s',
                    margin: 0,
                  }}
                >
                  {descText}
                </p>
              </div>
              <button className={styles.cta}>Get Started &nbsp; &gt;</button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.cardStack}>
              <div className={styles.cardWrapper} style={{ top: '0', left: '0', zIndex: 3 }}>
                <div className={styles.card}></div>
              </div>
              <div className={styles.cardWrapper} style={{ top: '40px', left: '40px', zIndex: 2 }}>
                <div className={styles.card}></div>
              </div>
              <div className={styles.cardWrapper} style={{ top: '80px', left: '80px', zIndex: 1 }}>
                <div className={styles.card}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupHero; 