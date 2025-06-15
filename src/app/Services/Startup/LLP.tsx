/* LLP.tsx - replicated from StartupHero.tsx */
'use client';

import React, { useState, useRef, useEffect } from "react";
import styles from "./LLP.module.css";
import BigLogoMarquee from '../../Components/BigLogoMarquee/BigLogoMarquee';
import gsap from "gsap";
import ComponentSix from '../../Components/TrialComponent/ComponentSix/ComponentSix';

const logoPaths = [
  "/CompanyLogos/1.png",
  "/CompanyLogos/2.png",
  "/CompanyLogos/3.png",
  "/CompanyLogos/4.png",
  "/CompanyLogos/5.png",
  "/CompanyLogos/6.png",
  "/CompanyLogos/7.png",
  "/CompanyLogos/8.png",
  "/CompanyLogos/9.png",
  "/CompanyLogos/10.png",
  "/CompanyLogos/11.png",
  "/CompanyLogos/12.png",
  "/CompanyLogos/13.png",
  "/CompanyLogos/14.png",
  "/CompanyLogos/15.png",
  "/CompanyLogos/16.png",
  "/CompanyLogos/17.png",
  "/CompanyLogos/18.png",
  "/CompanyLogos/19.png",
  "/CompanyLogos/20.png",
  "/CompanyLogos/21.png",
  "/CompanyLogos/22.png",
  "/CompanyLogos/23.png",
  "/CompanyLogos/24.png",
  "/CompanyLogos/25.png",
  "/CompanyLogos/26.png",
  "/CompanyLogos/27.png",
  "/CompanyLogos/28.png",
  "/CompanyLogos/29.png",
  "/CompanyLogos/30.png",
];

const fullDescription = `Setting up a business in India often involves choosing a private limited company as a preferred option. This structure offers shareholders limited liability protection while placing specific ownership constraints. In contrast, in the case of an LLP, partners oversee the management. Private limited company registration allows for a clear distinction between directors and shareholders.`;

const LLP = () => {
  const [hovered, setHovered] = useState(false);
  const [displayedWords, setDisplayedWords] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const descInnerRef = useRef<HTMLParagraphElement>(null);
  const descWrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const words = fullDescription.split(' ');
  const half = Math.ceil(words.length / 2);

  // Page progress bar effect with GSAP
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${scrollProgress}%`,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [scrollProgress]);

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
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '5px',
        background: 'rgba(0,0,0,0.05)',
        zIndex: 9999
      }}>
        <div
          ref={progressBarRef}
          style={{
            width: '0%',
            height: '100%',
            background: 'rgba(180, 0, 104, 1)'
          }}
        />
      </div>
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
        <BigLogoMarquee logos={logoPaths} speed="150s" />
        <div className={styles.otherSections}>
          <div className={styles.borderedDesc}>
            At Delfyle, we provide cost-effective solutions for company registration in India, ensuring a seamless and legally compliant process. From startup incorporation to online company registration, our expert team manages all legal formalities under the Ministry of Corporate Affairs (MCA) regulations.
          </div>
          <ComponentSix
            mainHeading="What is a Private Limited Company?"
            mainDescription="A private limited company is a privately held business entity with limited liability, making it one of the most preferred business structures in India. Its advantages include liability protection, ease of formation and maintenance, and recognition as a distinct legal entity. "
            showCtaButton={true}
            ctaButtonText="Learn More"
            ctaButtonLink="#"
            showRightContentPlaceholder={true}
            rightImageUrl="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </>
  );
};

export default LLP; 