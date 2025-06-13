"use client";

import React, { useState, useEffect } from "react";
import styles from "./TeamMembers.module.css";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sonam Singh",
    position: "Founder & Managing Director",
    quote: "Sonam Singh is the founder and Managing Director of Delfyle and a qualified law graduate (LL.B.), bringing over a decade of expertise in sales, marketing, strategic planning, and legal consulting. With a strong foundation in law and business, Sonam envisioned Delfyle as a one-stop solution for legal, compliance, accounting, and regulatory needs. Her leadership has transformed Delfyle into a trusted name for startups, corporates, and public institutions, providing reliable support in accounting, taxation, civil and criminal law. Driven by the spirit of Atmanirbhar Bharat and Startup India, Sonam's mission is to eliminate business hurdles and make entrepreneurship seamless for India's innovators.",
    color: "#FF6B6B",
    image: "/images/female.jpg"
  },
  {
    name: "Adwitiya Mukherjee",
    position: "Co-founder & Chief Executive Officer",
    quote: "As a qualified Company Secretary (CS), CA Finalist and the Co-founder & CEO of Delfyle, Adwitiya Mukherjee brings in-depth knowledge and years of experience in Corporate and Secretarial Laws. She has successfully handled clients of high repute and has assisted in numerous high-stakes NCLT cases. Adwitiya's analytical approach and compliance expertise make her an integral pillar of Delfyle's operations. Her work ensures that every client, from startups to large enterprises, receives precise, up-to-date, and compliant corporate governance solutions.",
    color: "#4ECDC4",
    image: "/images/female.jpg"
  },
  {
    name: "Abhinandan Das",
    position: "Legal Associate",
    quote: "Abhinandan Das is a legal associate specializing in corporate and civil litigation, with hands-on experience representing clients in various courts and tribunals across India. A law graduate from Calcutta University, Abhinandan excels in contract management, corporate advisory, and dispute resolution. His sharp understanding of commercial laws and contractual risk management makes him an essential member of Delfyle's legal team, offering strategic counsel to businesses across sectors.",
    color: "#45B7D1",
    image: "/images/male.jpg"
  },
  {
    name: "Sourav Mukherjee",
    position: "Legal Associate",
    quote: "Sourav Mukherjee is a versatile legal associate at Delfyle with strong expertise in projects & infrastructure law, commercial law, and dispute resolution. A graduate of Calcutta University with a B.A. LL.B., Sourav brings a multidisciplinary approach to legal practice, handling a wide range of civil and criminal matters.",
    bulletPoints: [
      "Civil litigation and cheque dishonor cases",
      "Debt Recovery Tribunal (DRT) proceedings",
      "Arbitration and contract enforcement",
      "Corporate and commercial contracts",
      "Insolvency and bankruptcy law",
      "Criminal law and family law",
      "Consumer protection disputes",
      "Labour and employment law",
      "Crimes against women and children",
      "Property disputes and administrative legal matters"
    ],
    color: "#96CEB4",
    image: "/images/male.jpg"
  },
  {
    name: "Avinash Roy",
    position: "Senior Tax Associate",
    quote: "Avinash Roy is a highly experienced Senior Tax Associate at Delfyle, specializing in both direct and indirect taxation. With over 6 years of in-depth experience, Avinash has successfully managed complex tax structures, assessments, and compliance strategies for startups, SMEs, corporates, and high-net-worth individuals.",
    bulletPoints: [
      "Income Tax planning and advisory",
      "GST compliance and return filing",
      "Tax audit support and representation",
      "Corporate taxation for private and public companies",
      "Handling notices, scrutiny, and appeals before tax authorities",
      "Structuring tax-efficient business models",
      "TDS management and e-filing services"
    ],
    color: "#FFEEAD",
    image: "/images/male.jpg"
  },
  {
    name: "Debangshu Auddy",
    position: "Compliance Executive",
    quote: "Debangshu Auddy is a Compliance Executive at Delfyle with over 3 years of experience in managing ROC compliances and legal documentation for both private and public companies. He specializes in end-to-end corporate compliance, ensuring seamless filings with the Ministry of Corporate Affairs (MCA) under the Companies Act, 2013.",
    bulletPoints: [
      "Filing of ROC forms (AOC-4, MGT-7, DIR-3 KYC, etc.)",
      "Handling company incorporation, changes in directorship, shareholding, and registered office",
      "Drafting of Board Resolutions, Shareholder Agreements, NDAs, MOA/AOA, and compliance documents",
      "Legal vetting and contract management"
    ],
    color: "#D4A5A5",
    image: "/images/male.jpg"
  }
];

const TeamMembers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [key, setKey] = useState(0);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setKey(prev => prev + 1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setKey(prev => prev + 1);
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.background_container} />
      <div className={styles.header}>
        <h2 className={styles.title}>Meet the Core Minds Behind Delfyle</h2>
        <h3 className={styles.subtitle}>Our Leadership & Legal Experts</h3>
        <p className={styles.description}>
          At Delfyle, we take pride in being more than just a legal and compliance consultancy—we're your extended team. Backed by professionals with deep expertise in law, finance, and corporate governance, our core team leads with precision, vision, and a shared passion for enabling entrepreneurial growth across India.
        </p>
      </div>
      <div className={styles.carousel_container}>
        <button 
          className={`${styles.nav_button} ${styles.prev_button}`}
          onClick={handlePrevious}
          aria-label="Previous team member"
          disabled={isAnimating}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={styles.grid} key={key}>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <div className={styles.member_info}>
                <h3 className={styles.member_name}>{teamMembers[currentIndex].name}</h3>
                <h4 className={styles.member_position}>{teamMembers[currentIndex].position}</h4>
              </div>
              <p className={styles.member_quote}>{teamMembers[currentIndex].quote}</p>
              {teamMembers[currentIndex].bulletPoints && (
                <ul className={styles.bullet_points}>
                  {teamMembers[currentIndex].bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.card_media}>
              <div className={styles.image_wrapper}>
                <Image
                  src={teamMembers[currentIndex].image}
                  alt={teamMembers[currentIndex].name}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.member_image}
                />
              </div>
              <div 
                className={styles.color_overlay}
                style={{ backgroundColor: teamMembers[currentIndex].color }}
              />
            </div>
          </div>
        </div>
        <button 
          className={`${styles.nav_button} ${styles.next_button}`}
          onClick={handleNext}
          aria-label="Next team member"
          disabled={isAnimating}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TeamMembers; 