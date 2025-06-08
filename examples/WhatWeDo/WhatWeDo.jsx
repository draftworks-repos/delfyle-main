import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  const [headingRef, setHeadingRef] = useState(null);
  const containerRef = useRef(null);
  const leftBlockRef = useRef(null);
  const headingRefs = [useRef(null), useRef(null), useRef(null)];
  const categoryRefs = [useRef(null), useRef(null), useRef(null)];
  const [activeDots, setActiveDots] = useState([false, false, false]);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);

  // Main heading progress bar scroll settings
  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ["start 0.7", "center center"],
  });

  // Vertical progress bar scroll settings
  const { scrollYProgress: verticalProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.6"],
  });

  // Create scroll animations for each category
  const categoryScrolls = categoryRefs.map((ref) =>
    useScroll({
      target: ref,
      offset: ["start 0.95", "end 0.6"],
    })
  );

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
        value >= 0.5, // Second dot appears at 50% vertical progress
        value >= 0.98, // Third dot appears near 100% vertical progress
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
  }, []);

  const lineWidth = useTransform(headingProgress, [0, 1], ["-50px", "200%"]);
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

  const categories = [
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
          ref={setHeadingRef}
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
                  activeDots[1] ? styles.active : ""
                }`}
              />
              <div
                className={`${styles.progressDot} ${
                  activeDots[2] ? styles.active : ""
                }`}
              />
              <div
                className={`${styles.progressDot} ${
                  activeDots[0] ? styles.active : ""
                }`}
              />
            </div>
          </div>

          {/* Category Cards */}
          <motion.div
            className={styles.categoryCardsContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                ref={(el) => {
                  headingRefs[index].current = el;
                  categoryRefs[index].current = el;
                }}
                className={styles.categoryCard}
                variants={cardVariants}
              >
                <div className={styles.progressBorder} />
                <div className={styles.progressBackground} />
                <div className={styles.cardContent}>
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <div className={styles.categoryContent}>
                    <h3 className={styles.cardHeading}>{category.title}</h3>
                    <p className={styles.cardDescription}>
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* New div for buttons and modal */}
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.button
            className={styles.whatWeDoButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login with OTP
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </motion.button>
          <motion.button
            className={styles.whatWeDoButton}
            onClick={handleWhatsappClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Whatsapp Us
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </motion.button>
        </motion.div>

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
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>Just a click away from us!</h3>
                <div className={styles.modalNumbers}>
                  {whatsappNumbers.map((number, index) => (
                    <motion.a
                      key={index}
                      href={`https://wa.me/${number.replace(/\D/g, "")}`}
                      className={styles.modalNumber}
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
