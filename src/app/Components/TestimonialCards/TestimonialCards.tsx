"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./TestimonialCards.module.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Samar Dolui",
    role: "Client",
    company: "Individual",
    image: "/images/male.jpg",
    rating: 5,
    quote:
      "This year, based on a friend's recommendation, I outsourced my tax filing for the first time, and I had a very pleasant experience with Delfyle Solutions. I was particularly impressed by Sonam's professionalism in handling my income tax filing. I will definitely engage them again in the future.",
  },
  {
    id: 2,
    name: "Angana Roy",
    role: "Client",
    company: "Individual",
    image: "/images/female.jpg",
    rating: 5,
    quote:
      "I had gotten in touch with them through a friend. Adwitiya was extremely helpful and prompt with all of my queries. They provided legal advice in a way which was easy to understand for a layman like me. All love and wishes to them. Would definitely recommend further.",
  },
  {
    id: 3,
    name: "Shyam Gupta",
    role: "Client",
    company: "Individual",
    image: "/images/male.jpg",
    rating: 5,
    quote:
      "Delfyle Solutions Private limited is one Platform to Company wonderful Work in A to Z Service.",
  },
  {
    id: 4,
    name: "A.S. Tours & Travels",
    role: "Business Client",
    company: "Travel Agency",
    image: "/images/male.jpg",
    rating: 5,
    quote:
      "I'd like to thank Avinash Ji from the team for his unwavering support throughout, which is very appreciated. They are exceedingly competent in their work, and I suggest them.",
  },
];

const TestimonialCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const [carouselWrapperWidth, setCarouselWrapperWidth] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  const cardsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const { scrollYProgress: headingProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "center center"],
  });
  const lineWidth = useTransform(headingProgress, [0, 1], ["0%", "80%"]);

  useEffect(() => {
    const handleResize = () => {
      if (carouselWrapperRef.current) {
        setCarouselWrapperWidth(carouselWrapperRef.current.offsetWidth);
      }
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const cardGap = 32; // Assuming 2rem gap (1rem = 16px)

  let calculatedCardWidth = 0;
  let calculatedContainerWidth = 0;
  if (carouselWrapperWidth > 0) {
    calculatedCardWidth =
      (carouselWrapperWidth - (cardsPerPage - 1) * cardGap) / cardsPerPage;
    calculatedContainerWidth =
      testimonials.length * calculatedCardWidth +
      (testimonials.length - 1) * cardGap;
  }

  const carouselX = -currentIndex * carouselWrapperWidth;

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <div className={styles.header} ref={headerRef}>
          <div className={styles.headingWrapper}>
            <h2 className={styles.title}>What Our Clients Say</h2>
            <motion.div
              className={styles.progressLine}
              style={{ width: lineWidth }}
            />
          </div>
          <div className={styles.navigation}>
            <motion.button
              className={styles.navButton}
              onClick={handlePrev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(107, 0, 62, 1)" />
                    <stop offset="100%" stopColor="rgba(180, 0, 104, 1)" />
                  </linearGradient>
                </defs>
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(107, 0, 62, 1)" />
                    <stop offset="100%" stopColor="rgba(180, 0, 104, 1)" />
                  </linearGradient>
                </defs>
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
        <div className={styles.carouselWrapper} ref={carouselWrapperRef}>
          <motion.div
            animate={{ x: carouselX }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={styles.cardsContainer}
            style={{ width: `${calculatedContainerWidth}px` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={styles.card}
                style={{ width: `${calculatedCardWidth}px` }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.quote}>{testimonial.quote}</p>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < testimonial.rating
                            ? styles.starFilled
                            : styles.starEmpty
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className={styles.author}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className={styles.profileImage}
                      />
                    </div>
                    <div className={styles.authorInfo}>
                      <h3 className={styles.name}>{testimonial.name}</h3>
                      <p className={styles.role}>
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className={styles.paginationDots}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;
