"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./StickyScroll.module.css";

interface ContentBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  icon,
  title,
  description,
  buttonText,
}) => (
  <div className={styles.contentBlock}>
    <div className={styles.iconContainer}>{icon}</div>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
    <button className={styles.button}>{buttonText}</button>
  </div>
);

const StickyScroll: React.FC = () => {
  // Replicate the content from the image provided
  const paymentsContent = {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM17.657 9.536L12.536 4.414C12.146 4.024 11.513 4.024 11.123 4.414L6 9.536C5.61 9.926 5.61 10.559 6 10.949C6.39 11.339 7.023 11.339 7.414 10.949L11 7.364V17.071C11 17.623 11.448 18.071 12 18.071C12.552 18.071 13 17.623 13 17.071V7.364L16.586 10.949C16.977 11.339 17.61 11.339 18 10.949C18.39 10.559 18.39 9.926 18 9.536Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Accept and optimise payments, globally",
    description:
      "Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using AI.",
    buttonText: "Start with Payments",
  };

  const contentBlocks = Array(6).fill(paymentsContent);

  return (
    <section className={styles.stickyScrollSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          {contentBlocks.map((content, index) => (
            <ContentBlock
              key={index}
              icon={content.icon}
              title={content.title}
              description={content.description}
              buttonText={content.buttonText}
            />
          ))}
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.stickyImageContainer}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
              alt="Payments Dashboard"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyScroll;
