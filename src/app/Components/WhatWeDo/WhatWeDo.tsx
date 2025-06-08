"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import styles from "./WhatWeDo.module.css";
import "@iconscout/unicons/css/line.css";
import Button from "../Button/Button";

interface Category {
  title: string;
  description: string;
  icon: JSX.Element;
}

const WhatWeDo: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBlockRef = useRef<HTMLDivElement>(null);
  const headingRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const categoryRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const [activeDots, setActiveDots] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [showWhatsappModal, setShowWhatsappModal] = useState<boolean>(false);
  const [isInView, setIsInView] = useState(false);

  // Check if component is in view
  const isComponentInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
  });

  // Main heading progress bar scroll settings
  const { scrollYProgress: headingProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Vertical progress bar scroll settings
  const { scrollYProgress: verticalProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Create scroll animations for each category
  const categoryScrolls = categoryRefs.map((ref) =>
    useScroll({
      target: containerRef,
      offset: ["start end", "center center"],
    })
  );

  useEffect(() => {
    if (isComponentInView) {
      setIsInView(true);
    }
  }, [isComponentInView]);

  useEffect(() => {
    // Update progress CSS variable based on scroll
    categoryScrolls.forEach((scroll, index) => {
      scroll.scrollYProgress.onChange((value) => {
        if (categoryRefs[index].current) {
          categoryRefs[index].current.style.setProperty(
            "--progress",
            `${value * 100}%`
          );
        }

        // Trigger first dot when first category starts animating
        if (index === 0) {
          setActiveDots((prev) => [value > 0, prev[1], prev[2]]);
        }
      });
    });

    // Update dot animations based on vertical progress
    verticalProgress.onChange((value) => {
      setActiveDots((prev) => [
        prev[0], // First dot is controlled by category scroll
        value >= 0.3, // Second dot appears at 30% vertical progress
        value >= 0.99, // Third dot appears at 99% vertical progress (adjusted again)
      ]);
    });

    const updatePositions = () => {
      if (containerRef.current && leftBlockRef.current) {
        // Update container height to match content
        const container = containerRef.current;
        const lastHeading = headingRefs[2].current;
        if (lastHeading) {
          const totalHeight =
            lastHeading.offsetTop +
            lastHeading.offsetHeight -
            container.offsetTop;
          leftBlockRef.current.style.height = `${totalHeight}px`;
        }
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    return () => {
      window.removeEventListener("resize", updatePositions);
    };
  }, [isInView]);

  const lineWidth = useTransform(headingProgress, [0, 1], ["0", "50%"]);
  const verticalHeight = useTransform(verticalProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleWhatsappClick = () => {
    setShowWhatsappModal(true);
    console.log("showWhatsappModal set to true");
  };

  const closeWhatsappModal = () => {
    setShowWhatsappModal(false);
  };

  const whatsappNumbers = ["+91 8959695949", "+91 89596930698"];

  // Framer Motion Variants for Modal
  const modalOverlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalContentVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

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

  return (
    <section className={styles.whatWeDo}>
      <div className={styles.container} ref={containerRef}>
        {/* Main Heading Section */}
        <motion.div
          ref={headingRef}
          className={styles.headerSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headingWrapper}>
            <h2 className={styles.mainHeading}>What We Do?</h2>
            <motion.div
              className={styles.progressLine}
              style={{ width: lineWidth }}
            />
          </div>
          <p className={styles.subHeading}>
            Delfyle is your one-stop solution for all things legal, compliance,
            and regulatory. We work like your extended CA, CS, and Legal
            Team—helping startups, SMEs, corporates, and government institutions
            stay compliant, stress-free, and growth-ready.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className={styles.twoColumnLayout}>
          {/* Left Block */}
          <div ref={leftBlockRef} className={styles.leftBlock}>
            <div className={styles.progressContainer}>
              <motion.div
                className={styles.verticalProgressBar}
                style={{ height: verticalHeight }}
              />
              {/* Progress Dots */}
              <div
                className={`${styles.progressDot} ${
                  activeDots[1] || isInView ? styles.active : ""
                }`}
              />
              <div
                className={`${styles.progressDot} ${
                  activeDots[2] || isInView ? styles.active : ""
                }`}
              />
              <div
                className={`${styles.progressDot} ${
                  activeDots[0] || isInView ? styles.active : ""
                }`}
              />
            </div>
          </div>

          {/* Category Cards */}
          <motion.div
            className={styles.categoryCardsContainer}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {categories.map((category, index) => {
              const { scrollYProgress: cardProgress } = categoryScrolls[index];
              const textColor = useTransform(
                cardProgress,
                [0, 1],
                ["#ffffff", "#171717"]
              );

              const textOpacity = useTransform(cardProgress, [0.9, 1], [0, 1]);
              const textY = useTransform(cardProgress, [0.9, 1], [20, 0]);

              return (
                <motion.div
                  key={category.title}
                  ref={categoryRefs[index]}
                  className={styles.categoryCard}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.div
                    className={styles.progressBackground}
                    style={{
                      width: cardProgress.get() * 100 + "%",
                    }}
                  />
                  <div className={styles.cardContent}>
                    <div className={styles.categoryIcon}>{category.icon}</div>
                    <div className={styles.categoryContent}>
                      <motion.h3
                        ref={headingRefs[index]}
                        className={styles.cardHeading}
                        style={{
                          color: textColor,
                          opacity: textOpacity,
                          y: textY,
                        }}
                      >
                        {category.title}
                      </motion.h3>
                      <motion.p
                        className={styles.cardDescription}
                        style={{
                          color: textColor,
                          opacity: textOpacity,
                          y: textY,
                        }}
                      >
                        {category.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* WhatsApp Button */}
        <div className={styles.buttonContainer}>
          <Button text="Login with OTP" type="whatWeDoButton" />
          <Button
            text="Whatsapp us"
            type="whatWeDoButton"
            onClick={handleWhatsappClick}
          />
        </div>

        {/* WhatsApp Modal */}
        <AnimatePresence>
          {showWhatsappModal && (
            <motion.div
              className={styles.modalOverlay}
              variants={modalOverlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={closeWhatsappModal}
            >
              <motion.div
                className={styles.modalContent}
                variants={modalContentVariants}
                onClick={(e) => e.stopPropagation()}
              >
                <h3>Contact Us</h3>
                <div className={styles.modalNumbers}>
                  {whatsappNumbers.map((number, index) => (
                    <motion.a
                      key={index}
                      href={`https://wa.me/${number.replace(/\D/g, "")}`}
                      className={styles.modalNumber}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {number}
                    </motion.a>
                  ))}
                </div>
                <button
                  className={styles.closeButton}
                  onClick={closeWhatsappModal}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhatWeDo;
