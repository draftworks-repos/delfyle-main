"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollPosition = window.scrollY;
      const cardHeight = ref.current.offsetHeight / cardLength;
      const currentCard = Math.floor(scrollPosition / cardHeight);
      setActiveCard(Math.min(currentCard, cardLength - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cardLength]);

  return (
    <div ref={ref} className="relative w-full">
          {content.map((item, index) => (
        <div
          key={item.title + index}
          className="min-h-screen w-full"
          style={{
            height: `${100}vh`,
          }}
        >
          <div className="sticky top-0 flex h-screen items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                y: activeCard === index ? 0 : 20,
                }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-full max-w-5xl px-4"
              >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-4xl font-bold text-neutral-800 dark:text-white">
                {item.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-300">
                {item.description}
                  </p>
                </div>
                <div className={cn("h-[400px] w-full", contentClassName)}>
                  {item.content}
                </div>
              </div>
            </motion.div>
            </div>
        </div>
      ))}
      </div>
  );
};
