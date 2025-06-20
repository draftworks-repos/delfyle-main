"use client";

import React, { useState } from "react";
import styles from "./SocialLinks.module.css";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com",
    color: "#0077B5"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com",
    color: "#333"
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com",
    color: "#1DA1F2"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com",
    color: "#E4405F"
  }
];

const SocialLinks = () => {
  const [hoverColor, setHoverColor] = useState<string>("#ffffff");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = (color: string) => {
    setHoverColor(color);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setHoverColor("#ffffff");
    setIsHovered(false);
  };

  return (
    <section 
      className={styles.section}
      style={{ 
        backgroundColor: hoverColor,
        transition: 'background-color 0.5s ease'
      }}
    >
      <div className={styles.mainContainer}>
        <div className={styles.headerSection}>
          <div className={styles.headingContainer}>
            <h1
              className={styles.mainHeading + (isHovered ? ' ' + styles.mainHeadingWhite : '')}
            >
              Connect With Us
            </h1>
          </div>
          <p 
            className={styles.subtitle}
            style={{ color: isHovered ? "#ffffff" : "#666" }}
          >
            Follow us on social media to stay updated with our latest news, updates, and insights.
          </p>
        </div>
        
        <div className={styles.cardsMainContainer}>
          <div className={styles.cardsContainer}>
            {socialLinks.map((link) => (
              <div key={link.name} className={styles.cardContainer}>
                <a
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

export default SocialLinks; 