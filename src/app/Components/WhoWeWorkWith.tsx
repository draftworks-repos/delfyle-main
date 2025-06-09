"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./WhoWeWorkWith.module.css";

const WhoWeWorkWith = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Progress line scroll settings
  const { scrollYProgress: headerProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const lineWidth = useTransform(headerProgress, [0, 1], ["0%", "50%"]);

  const categories = [
    {
      title: "Startups",
      subtitle: "Idea to Series A",
      description:
        "Supporting innovative ideas from conception to growth stage",
      icon: "🚀",
    },
    {
      title: "SMEs & MSMEs",
      subtitle: "",
      description:
        "Empowering small and medium enterprises to scale efficiently",
      icon: "💼",
    },
    {
      title: "Corporates & Enterprises",
      subtitle: "",
      description: "Streamlining operations for established businesses",
      icon: "🏢",
    },
    {
      title: "NGOs & Trusts",
      subtitle: "",
      description:
        "Enabling social impact organizations to focus on their mission",
      icon: "🤝",
    },
    {
      title: "Government Bodies & PSUs",
      subtitle: "",
      description:
        "Modernizing public sector operations with efficient solutions",
      icon: "🏛️",
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index < 2 ? index * 0.1 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const bottomTextVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          ref={headerRef}
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>
            Who We Work With
            <motion.div
              className={styles.progressLine}
              style={{ width: lineWidth }}
            />
          </h2>
        </motion.div>

        <div className={styles.categoriesContainer}>
          {categories.map((category, index) => {
            const [ref, inView] = useInView({
              triggerOnce: false,
              threshold: index < 2 ? 0.05 : 0.1,
              rootMargin: "15% 0px",
            });

            return (
              <div
                key={category.title}
                className={styles.categoryCardAnimationWrapper}
              >
                <motion.div
                  ref={ref}
                  className={styles.categoryCard}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={index}
                >
                  <div className={styles.categoryContent}>
                    <div className={styles.titleWrapper}>
                      <div className={styles.categoryIcon}>{category.icon}</div>
                      <div className={styles.titleGroup}>
                        <h3 className={styles.categoryTitle}>
                          {category.title}
                          {category.subtitle && (
                            <span className={styles.subtitle}>
                              {" "}
                              {category.subtitle}
                            </span>
                          )}
                        </h3>
                      </div>
                    </div>
                    <p className={styles.categoryDescription}>
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <motion.div
          className={styles.bottomText}
          variants={bottomTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          <motion.div
            className={styles.bottomTextLine}
            variants={{
              hidden: { width: 0 },
              visible: {
                width: "40px",
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          />
          Whether you're launching, scaling, pivoting, or winding down, Delfyle
          is built to help you move faster—without the paperwork drag.
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
