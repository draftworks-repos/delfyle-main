"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./FeaturedServices.module.css";
import "@iconscout/unicons/css/line.css";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
}

const FeaturedServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
  });

  const services: Service[] = [
    {
      title: "Company Incorporation",
      description:
        "Expert assistance for seamless company registration and setup.",
      icon: <i className="uil uil-building"></i>,
      image: "/images/horizontal-demo-image.png",
    },
    {
      title: "Accounting/Bookkeeping",
      description:
        "Comprehensive financial record-keeping and reporting services.",
      icon: <i className="uil uil-calculator-alt"></i>,
      image: "/images/horizontal-demo-image.png",
    },
    {
      title: "GST Registration and Filing",
      description: "Hassle-free GST registration and timely return filings.",
      icon: <i className="uil uil-file-check-alt"></i>,
      image: "/images/horizontal-demo-image.png",
    },
    {
      title: "ITR Filings",
      description: "Efficient Income Tax Return preparation and submission.",
      icon: <i className="uil uil-file-export"></i>,
      image: "/images/horizontal-demo-image.png",
    },
    {
      title: "Trademark Registration",
      description: "Protecting your brand with expert trademark registration.",
      icon: <i className="uil uil-trademark-circle"></i>,
      image: "/images/horizontal-demo-image.png",
    },
    {
      title: "ISO Certification",
      description:
        "Achieve global standards with professional ISO certification.",
      icon: <i className="uil uil-award"></i>,
      image: "/images/horizontal-demo-image.png",
    },
    {
      title: "FSSAI Registration/License",
      description: "Ensuring food safety compliance with FSSAI registration.",
      icon: <i className="uil uil-shield-check"></i>,
      image: "/images/horizontal-demo-image.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.featuredServices}>
      <div className={styles.container} ref={containerRef}>
        {/* Main Heading Section */}
        <motion.div
          className={styles.headerSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headingWrapper}>
            <h2 className={styles.mainHeading}>Featured Services of Delfyle</h2>
            <motion.div
              className={styles.progressLine}
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className={styles.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            let className = styles.serviceCard;
            if (index === 3 || index === 6) {
              // Index 3 for row 2 (spans 2), Index 6 for row 3 (spans 2)
              className += ` ${styles.span2Col}`;
            }

            return (
              <motion.div
                key={service.title}
                className={className}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.imagePlaceholder}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
