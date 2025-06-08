"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonial.module.css";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

const Testimonial: React.FC = () => {
  const [active, setActive] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "This year, based on a friend's recommendation, I outsourced my tax filing for the first time, and I had a very pleasant experience with Delfyle Solutions. I was particularly impressed by Sonam's professionalism in handling my income tax filing. I will definitely engage them again in the future.",
      name: "Samar Dolui",
      designation: "5 Star Google Review",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "I had gotten in touch with them through a friend. Adwitiya was extremely helpful and prompt with all of my queries. They provided legal advice in a way which was easy to understand for a layman like me. All love and wishes to them. Would definitely recommend further.",
      name: "Angana Roy",
      designation: "5 Star Google Review",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Delfyle Solutions Private limited is one Platform to Company wonderful Work in A to Z Service.",
      name: "Shyam Gupta",
      designation: "5 Star Google Review",
      image:
        "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "I'd like to thank Avinash Ji from the team for his unwavering support throughout, which is very appreciated. They are exceedingly competent in their work, and I suggest them.",
      name: "A.S. Tours & Travels",
      designation: "5 Star Google Review",
      image:
        "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
  ];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Hear from our valued clients about their experience with Delfyle
          </p>
        </motion.div>

        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.image}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: index === active ? 1 : 0.7,
                        scale: index === active ? 1 : 0.95,
                        z: index === active ? 0 : -100,
                        rotate: index === active ? 0 : randomRotateY(),
                        zIndex:
                          index === active
                            ? 40
                            : testimonials.length + 2 - index,
                        y: index === active ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className={styles.imageWrapper}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className={styles.testimonialImage}
                        priority
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className={styles.textContent}>
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={styles.testimonialText}
              >
                <h3 className={styles.name}>{testimonials[active].name}</h3>
                <p className={styles.designation}>
                  {testimonials[active].designation}
                </p>
                <motion.p className={styles.quote}>
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className={styles.word}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              <div className={styles.navigation}>
                <motion.button
                  className={styles.navButton}
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  className={styles.navButton}
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
