"use client";

import React from "react";
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
  return (
    <section className={styles.section}>
      <div className={styles.mainContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.mainHeading}>Connect With Us</h1>
          <p className={styles.subtitle}>
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