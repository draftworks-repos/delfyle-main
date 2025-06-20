"use client";

import React, { useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./CompanyLogos.module.css";
import LogoMarquee from "../LogoMarquee/LogoMarquee";

const CompanyLogos: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  // Main heading progress bar scroll settings
  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ["start 0.7", "center center"],
  });

  const lineWidth = useTransform(headingProgress, [0, 1], ["2%", "30%"]);

  const logos = [
    { name: "Sony", url: "/company-logos/Sony_Logo_1.png" },
    { name: "Sony2", url: "/company-logos/Sony_Logo_2.webp" },
    { name: "Disney", url: "/company-logos/Disney_iddEtLt1OH_1.png" },
    { name: "Netflix", url: "/company-logos/Netflix_Logo_1.png" },
    { name: "Netflix2", url: "/company-logos/Netflix_Logo_2.webp" },
    { name: "HP", url: "/company-logos/HP_Logo_1.png" },
    { name: "HP2", url: "/company-logos/HP_Logo_2.webp" },
    { name: "NVIDIA", url: "/company-logos/NVIDIA_Logo_1.png" },
    { name: "NVIDIA2", url: "/company-logos/NVIDIA_Logo_2.webp" },
    { name: "Samsung", url: "/company-logos/Samsung_idrZcaRCpR_1.png" },
    { name: "Intel", url: "/company-logos/Intel_idShZPpM6F_1.png" },
    { name: "Meta", url: "/company-logos/Meta_idlf4cVSsS_1.png" },
    { name: "Amazon", url: "/company-logos/Amazon_Logo_1.png" },
    { name: "Amazon2", url: "/company-logos/Amazon_Logo_2.webp" },
    { name: "Microsoft", url: "/company-logos/Microsoft_Logo_1.png" },
    { name: "Microsoft2", url: "/company-logos/Microsoft_Logo_2.webp" },
    { name: "Google", url: "/company-logos/Google_Logo_1.png" },
    { name: "Google2", url: "/company-logos/Google_Logo_2.webp" },
    { name: "Apple", url: "/company-logos/Apple_Logo_1.png" },
    { name: "Apple2", url: "/company-logos/Apple_Logo_2.webp" },
  ];

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array: typeof logos) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Use useMemo to prevent re-shuffling on every render
  const shuffledLogos = useMemo(() => shuffleArray(logos), []);

  return (
    <section className={styles.companyLogosSection}>
      <div className={styles.container}>
        <motion.div
          ref={headingRef}
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.mainHeading}>Proud To Have Worked With</h2>
          <motion.div
            className={styles.progressLine}
            style={{ width: lineWidth }}
          />
        </motion.div>
        <LogoMarquee logos={[
          "/CompanyLogos/1.png", "/CompanyLogos/2.png", "/CompanyLogos/3.png", "/CompanyLogos/4.png", "/CompanyLogos/5.png", "/CompanyLogos/6.png", "/CompanyLogos/7.png", "/CompanyLogos/8.png", "/CompanyLogos/9.png", "/CompanyLogos/10.png", "/CompanyLogos/11.png", "/CompanyLogos/12.png", "/CompanyLogos/13.png", "/CompanyLogos/14.png", "/CompanyLogos/15.png", "/CompanyLogos/16.png", "/CompanyLogos/17.png", "/CompanyLogos/18.png", "/CompanyLogos/19.png", "/CompanyLogos/20.png", "/CompanyLogos/21.png", "/CompanyLogos/22.png", "/CompanyLogos/23.png", "/CompanyLogos/24.png", "/CompanyLogos/25.png", "/CompanyLogos/26.png", "/CompanyLogos/27.png", "/CompanyLogos/28.png", "/CompanyLogos/29.png", "/CompanyLogos/30.png"
        ]} />
        {/* <div className={styles.logosGrid}>
          {shuffledLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image
                src={logo.url}
                alt={`${logo.name} Logo`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default CompanyLogos;
