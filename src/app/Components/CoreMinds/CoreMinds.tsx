"use client";

import React, { useEffect, useRef } from "react";
import styles from "./CoreMinds.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

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

const CoreMinds: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    if (section && wrapper) {
      const items = wrapper.querySelectorAll(`.${styles.item}`);

      // Initial states
      items.forEach((item, index) => {
        if (index !== 0) {
          gsap.set(item, { 
            yPercent: 150,
            scale: 1,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
          });
        } else {
          gsap.set(item, {
            scale: 1,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
          });
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${items.length * 100}%`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      items.forEach((item, index) => {
        timeline.to(item, {
          scale: 0.9,
          borderRadius: "10px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          duration: 1
        });

        timeline.to(
          items[index + 1],
          {
            yPercent: 0,
            duration: 1
          },
          "<"
        );
      });

      // Refresh ScrollTrigger after a small delay
      const timeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.background_container} />
      <div className={styles.header}>
        <h2 className={styles.title}>Meet the Core Minds Behind Delfyle</h2>
        <h3 className={styles.subtitle}>Our Leadership & Legal Experts</h3>
        <motion.div
          className={styles.progressLine}
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <p className={styles.description}>
          At Delfyle, we take pride in being more than just a legal and compliance consultancy—we're your extended team. Backed by professionals with deep expertise in law, finance, and corporate governance, our core team leads with precision, vision, and a shared passion for enabling entrepreneurial growth across India.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div ref={wrapperRef} className={styles.list}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.item_wrapper}>
              <div className={styles.item}>
              <div className={styles.item_content}>
                <div className={styles.member_info}>
                  <h3 className={styles.member_name}>{member.name}</h3>
                  <h4 className={styles.member_position}>{member.position}</h4>
                </div>
                <p className={styles.member_quote}>{member.quote}</p>
                {member.bulletPoints && (
                  <ul className={styles.bullet_points}>
                    {member.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={styles.item_media}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className={styles.member_image}
                  />
                </div>
                <div 
                  className={styles.color_overlay}
                  style={{ backgroundColor: member.color }}
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreMinds; 