"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./SocialMedia.module.css";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/your-profile",
    color: "#0077B5"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/your-username",
    color: "#333"
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/your-handle",
    color: "#1DA1F2"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/your-profile",
    color: "#E4405F"
  }
];

const SocialMedia = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [hoverColor, setHoverColor] = useState<string>("#ffffff");
  const defaultColor = socialLinks[3].color; // Instagram's color

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step 1: Pin the main container
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%", // This gives us space for all animations
        pin: true,
        pinSpacing: true,
      });

      // Create timeline for card animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
        }
      });

      // Step 2-5: Animate each card sequentially
      socialLinks.forEach((link, index) => {
        const card = cardsRef.current[index];
        if (!card) return;

        // Add to timeline
        tl.to(card, {
          top: 0,
          duration: 1,
          ease: "power2.inOut"
        }, index * 1) // Stagger the animations
        .to(sectionRef.current, {
          backgroundColor: link.color,
          duration: 1,
          ease: "power2.inOut"
        }, index * 1)
        .to(subtitleRef.current, {
          color: "#ffffff",
          duration: 0.5,
          ease: "power2.inOut"
        }, index * 1);
      });

      // Step 6: Unpin happens automatically when the ScrollTrigger reaches its end
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (color: string) => {
    setHoverColor(color);
  };

  const handleMouseLeave = () => {
    setHoverColor(defaultColor);
  };

  return (
    <section 
      ref={sectionRef} 
      className={styles.section}
      style={{ backgroundColor: hoverColor }}
    >
      <div ref={mainContainerRef} className={styles.mainContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.mainHeading}>Connect With Us</h1>
          <p ref={subtitleRef} className={styles.subtitle}>
            Follow us on social media to stay updated with our latest news, updates, and insights.
          </p>
        </div>
        
        <div className={styles.cardsMainContainer}>
          <div className={styles.cardsContainer}>
            {socialLinks.map((link, index) => (
              <div key={link.name} className={styles.cardContainer}>
                <a
                  ref={el => {
                    cardsRef.current[index] = el;
                  }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  style={{ "--hover-color": link.color } as React.CSSProperties}
                  onMouseEnter={() => handleMouseEnter(link.color)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.iconCardContainer}>
                    <div className={styles.iconWrapper}>
                      <link.icon className={styles.icon} />
                    </div>
                    <span className={styles.linkName}>{link.name}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia; 