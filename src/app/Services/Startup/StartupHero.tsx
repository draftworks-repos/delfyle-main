'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import styles from "./StartupHero.module.css";

gsap.registerPlugin(ScrollTrigger, Observer);

const words = ["enterprise", "vision", "future", "success"];

const StartupHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const animationInterval = useRef<NodeJS.Timeout | null>(null);
  const isAnimating = useRef(false);
  const currentWordIndex = useRef(0);

  const scrambleText = (element: HTMLElement, newText: string) => {
    isAnimating.current = true;
    if (animationInterval.current) {
      clearInterval(animationInterval.current);
    }
    const chars = '!<>-_\\/[]{}—=+*^?#';
    let iteration = 0;
    
    animationInterval.current = setInterval(() => {
      element.innerText = newText
        .split("")
        .map((_letter, index) => {
          if(index < iteration) {
            return newText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if(iteration >= newText.length){
        if (animationInterval.current) clearInterval(animationInterval.current);
        setTimeout(() => { isAnimating.current = false; }, 100);
      }
      
      iteration += 1 / 3;
    }, 40);
  };

  const goToSection = (index: number) => {
    if (isAnimating.current) return;
    currentWordIndex.current = index;
    scrambleText(textRef.current!, words[index]);
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const pin = ScrollTrigger.create({
      trigger: hero,
      pin: true,
      start: "top top",
      end: `+=${(words.length) * 100}`,
      onLeave: () => {
        // Optional: Do something when you scroll past the hero
      },
      onLeaveBack: () => {
        // Optional: Do something when you scroll back into the hero
      }
    });

    const observer = Observer.create({
      target: window,
      type: "wheel,touch",
      onDown: () => {
        if (currentWordIndex.current < words.length - 1) {
          goToSection(currentWordIndex.current + 1);
        }
      },
      onUp: () => {
        if (currentWordIndex.current > 0) {
          goToSection(currentWordIndex.current - 1);
        }
      },
      tolerance: 10,
      preventDefault: true,
    });

    return () => {
      pin.kill();
      observer.kill();
      if (animationInterval.current) {
        clearInterval(animationInterval.current);
      }
    };
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <section ref={heroRef} className={styles.heroSection}>
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
            <h1 className={styles.heading}>
              Build the next<br />
              era of your <span ref={textRef} className={styles.colored}>enterprise</span>
            </h1>
            <p className={styles.description}>
              Leading enterprises use Stripe to revolutionise their business – from Amazon's rapid expansion into global markets to BMW's re-imagination of the customer experience.
            </p>
            <button className={styles.cta}>Contact sales &nbsp; &gt;</button>
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