"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ClientReviews.module.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  quote: string;
  type?: "video" | "text";
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sandipan Guha",
    role: "Client",
    company: "Individual",
    image: "/images/male.jpg",
    rating: 5,
    quote:
      "If you want fastest processing of your company incorporation and related progressions, look no where Delfyle Solutions does it fastest as I have seen, moreover they provide with proper information and good behavioural communication through out the time period and also post work done.\n\nThanks to all the members of Delfyle for fulfilling the commitment and helping us in our endeavours.",
    type: "text",
  },
  {
    id: 2,
    name: "Angana Roy",
    role: "Client",
    company: "Individual",
    image: "/images/Angana Roy.png",
    rating: 5,
    quote:
      "I had gotten in touch with them through a friend. Adwitiya was extremely helpful and prompt with all of my queries. They provided legal advice in a way which was easy to understand for a layman like me. All love and wishes to them. Would definitely recommend further.",
    type: "text",
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
    type: "text",
  },
  {
    id: 4,
    name: "Mechtrobo Private Limited",
    role: "Business Client",
    company: "Technology",
    image: "/images/male.jpg",
    rating: 5,
    quote:
      "Thank you Team Delfyle for on time delivering you commitment.\nRecommended by one of my friend when I'm struggling with my ITR & license related work, you people's really help us in a great manner.",
    type: "text",
  },
  {
    id: 5,
    name: "StoryBizz",
    role: "Client",
    company: "Business",
    image: "/images/Anupal.png",
    rating: 5,
    quote: "Watch our video testimonial",
    type: "video",
    videoUrl:
      "https://player.vimeo.com/video/824804225?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&portrait=1&quality=720p",
  },
  {
    id: 6,
    name: "Shantanu Samaddar",
    role: "Client",
    company: "Individual",
    image: "/images/Shantanu Samaddar.jpg",
    rating: 5,
    quote:
      "The team is vey friendly in communication, yet professional in execution. Makes best and correct use of information provided and usually comes up with the best solution possible. There is usually no back and forth with information and documents to reach a conclusion or solution. In short, friendly, quick, confident and fair priced.",
    type: "text",
  },
  {
    id: 7,
    name: "Shashank Shekhar Singh",
    role: "Client",
    company: "Individual",
    image: "/images/Shashank Shekhar Singh.jpg",
    rating: 5,
    quote:
      "We've had an outstanding experience working with Delfyle. Their team has been absolutely helpful at every step—whether it was company registration, trademark filings, GST, ITR, tax audits, or accounting and other matters. They were always available, responsive, and proactive in finding the right solutions for our compliance needs.\n\nWhat sets Delfyle apart is their deep understanding of regulatory requirements and their commitment to making the process seamless and stress-free. Their support has been instrumental in helping our organization stay compliant and grow with confidence.",
    type: "text",
  },
];

const ClientReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const [carouselWrapperWidth, setCarouselWrapperWidth] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [dynamicCardWidth, setDynamicCardWidth] = useState(0);

  const cardsPerPage = 1;
  const totalPages = testimonials.length;

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
      if (cardRef.current) {
        setDynamicCardWidth(cardRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

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

  const cardGap = 32;
  let calculatedContainerWidth = 0;
  let carouselX = 0;

  if (carouselWrapperWidth > 0 && dynamicCardWidth > 0) {
    calculatedContainerWidth =
      testimonials.length * (dynamicCardWidth + cardGap);

    const centerOffset = (carouselWrapperWidth - dynamicCardWidth) / 2;

    carouselX = centerOffset - currentIndex * (dynamicCardWidth + cardGap);
  }

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
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={styles.card}
                data-type={testimonial.type}
                ref={index === 0 ? cardRef : null}
                style={{ width: `${dynamicCardWidth}px` }}
              >
                <div className={styles.cardContent}>
                  {testimonial.type === "video" ? (
                    <div className={styles.videoContainer}>
                      <iframe
                        src={testimonial.videoUrl}
                        className={styles.videoFrame}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <>
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
                    </>
                  )}
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

export default ClientReviews;
