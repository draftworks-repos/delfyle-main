"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import styles from "./NewWhatWeDo.module.css";
import "@iconscout/unicons/css/line.css";
import Button from "../Button/Button";

interface Category {
  title: string;
  description: string;
  icon: JSX.Element;
}

const categories: Category[] = [
  {
    title: "Personal Tax",
    description:
      "Expert tax planning and filing services for individuals, ensuring maximum returns and compliance.",
    icon: <i className="uil uil-users-alt"></i>,
  },
  {
    title: "Business Tax",
    description:
      "Comprehensive tax solutions for businesses of all sizes, from startups to enterprises.",
    icon: <i className="uil uil-building"></i>,
  },
  {
    title: "Legal Services",
    description:
      "Professional legal assistance for business registration, compliance, and documentation.",
    icon: <i className="uil uil-shield-check"></i>,
  },
];

const NewWhatWeDo: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
    if (subHeadingRef.current) {
      gsap.fromTo(
        subHeadingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" }
      );
    }
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.5 + i * 0.2, ease: "power3.out" }
        );
      }
    });
    // Progress background animation for each card
    progressRefs.current.forEach((progressEl, i) => {
      if (progressEl && cardRefs.current[i]) {
        gsap.fromTo(
          progressEl,
          { width: "0%" },
          {
            width: "100%",
            scrollTrigger: {
              trigger: cardRefs.current[i],
              start: "top 80%",
              end: "bottom 80%",
              scrub: true,
            },
            ease: "none",
          }
        );
      }
    });
    // Progress bar below heading
    if (progressBarRef.current) {
      gsap.fromTo(
        progressBarRef.current,
        { width: "0%" },
        {
          width: "50%",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
          ease: "none",
        }
      );
    }
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.whatWeDo}>
      <div className={styles.container}>
        {/* Main Heading Section */}
        <div ref={headingRef} className={styles.headerSection}>
          <div className={styles.headingWrapper}>
            <h2 className={styles.mainHeading}>What We Do?</h2>
            <div ref={progressBarRef} className={styles.progressLine} />
          </div>
          <p ref={subHeadingRef} className={styles.subHeading}>
            Delfyle is your one-stop solution for all things legal, compliance,
            and regulatory. We work like your extended CA, CS, and Legal
            Team—helping startups, SMEs, corporates, and government institutions
            stay compliant, stress-free, and growth-ready.
          </p>
        </div>

        {/* Category Cards */}
        <div className={styles.categoryCardsContainer}>
          {categories.map((category, index) => (
            <div
              key={category.title}
              ref={el => { cardRefs.current[index] = el; }}
              className={styles.categoryCard}
            >
              <div
                ref={el => { progressRefs.current[index] = el; }}
                className={styles.progressBackground}
              />
              <div className={styles.cardContent}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <div className={styles.categoryContent}>
                  <h3 className={styles.cardHeading}>{category.title}</h3>
                  <p className={styles.cardDescription}>{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className={styles.buttonContainer}>
          <Button 
            text="Get in touch"
            type="smallWhatWeDoButton"
            onClick={() => {
              const formElement = document.getElementById('modern-contact-form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
          <Button
            text="Chat with us"
            type="smallWhatWeDoButton"
            onClick={() => {
              window.open('https://wa.me/918959695949', '_blank');
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default NewWhatWeDo; 