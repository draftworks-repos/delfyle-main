'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import {
  IconBuildingStore,
  IconTrademark,
  IconFileInvoice,
  IconReceipt,
  IconBuildingSkyscraper,
  IconClipboardCheck,
  IconCalculator,
} from "@tabler/icons-react";
import styles from "./FeaturesSection.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Business Registration",
      description: "Start your business journey with our comprehensive registration services including Private Limited, OPC, LLP, and more.",
      icon: <IconBuildingStore className="w-8 h-8" />,
    },
    {
      title: "Trademark & IP",
      description: "Protect your brand and intellectual property with our trademark registration and IP services.",
      icon: <IconTrademark className="w-8 h-8" />,
    },
    {
      title: "GST Registration",
      description: "Get your business GST registered and stay compliant with tax regulations.",
      icon: <IconFileInvoice className="w-8 h-8" />,
    },
    {
      title: "Income Tax",
      description: "Expert assistance with income tax filing, planning, and compliance for individuals and businesses.",
      icon: <IconReceipt className="w-8 h-8" />,
    },
    {
      title: "MCA Services",
      description: "Complete MCA compliance and filing services for your company's legal requirements.",
      icon: <IconBuildingSkyscraper className="w-8 h-8" />,
    },
    {
      title: "Business Compliance",
      description: "Stay compliant with all business regulations and requirements with our expert guidance.",
      icon: <IconClipboardCheck className="w-8 h-8" />,
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning services to optimize your tax liabilities and maximize savings.",
      icon: <IconCalculator className="w-8 h-8" />,
    },
    {
      title: "Business Advisory",
      description: "Expert business advisory services to help you make informed decisions and grow your business.",
      icon: <IconBuildingStore className="w-8 h-8" />,
    },
  ];

  const headerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "center center"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["2%", "30%"]);

  return (
    <div className={styles.featuresSection}>
      {/* Header Section for FeaturesSection */}
      <div ref={headerRef} className={styles.headerSection}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.mainHeading}>Featured Services of Delfyle</h2>
          <motion.div className={styles.progressLine} style={{ width: lineWidth }} />
        </div>
        <p className={styles.subHeading}>
          Comprehensive business solutions to help you start, grow, and succeed
        </p>
      </div>

      {/* Background Elements */}
      <div className={styles.background}>
        <div className={`${styles.blob} ${styles.blobBlue}`}></div>
        <div className={`${styles.blob} ${styles.blobPurple}`}></div>
        <div className={`${styles.blob} ${styles.blobPink}`}></div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Feature 
              key={feature.title} 
              {...feature} 
              index={index} 
              isMiddleCard={index === 1 || index === 2 || index === 5 || index === 6}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  isMiddleCard,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isMiddleCard: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const header = headerRef.current;
    if (!card || !header) return;

    const handleMouseEnter = () => {
      if (isMiddleCard) {
        gsap.to(card, {
          y: -100,
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          duration: 0.2,
          ease: "power1.out"
        });
      } else {
        gsap.to(card, {
          y: -15,
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          duration: 0.2,
          ease: "power1.out"
        });
      }
      // Header lift animation
      gsap.to(header, {
        y: -5,
        duration: 0.2,
        ease: "power1.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: isMiddleCard ? -90 : 0,
        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        duration: 0.2,
        ease: "power1.out"
      });
      // Header return animation
      gsap.to(header, {
        y: 0,
        duration: 0.2,
        ease: "power1.out"
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Initial position for middle cards
    if (isMiddleCard) {
      gsap.set(card, { y: -90 });
    }

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMiddleCard]);

  return (
    <div 
      ref={cardRef}
      className={styles.card}
    >
      <div ref={headerRef} className="relative z-10">
        <div className={styles.icon}>
          {icon}
        </div>
        <h3 className={styles.cardTitle}>
          {title}
        </h3>
        <p className={styles.cardDesc}>
          {description}
        </p>
      </div>
    </div>
  );
}; 