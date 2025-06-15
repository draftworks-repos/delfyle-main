"use client"

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const LogoOrigami = () => {
  return (
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-white">
            <Image src="/CompanyLogos/1.png" alt="Logo 1" width={128} height={128} />
          </LogoItem>,
          <LogoItem key={2} className="bg-white">
            <Image src="/CompanyLogos/2.png" alt="Logo 2" width={128} height={128} />
          </LogoItem>,
          <LogoItem key={3} className="bg-white">
            <Image src="/CompanyLogos/3.png" alt="Logo 3" width={128} height={128} />
          </LogoItem>,
          <LogoItem key={4} className="bg-white">
            <Image src="/CompanyLogos/4.png" alt="Logo 4" width={128} height={128} />
          </LogoItem>,
          <LogoItem key={5} className="bg-white">
            <Image src="/CompanyLogos/5.png" alt="Logo 5" width={128} height={128} />
          </LogoItem>,
          <LogoItem key={6} className="bg-white">
            <Image src="/CompanyLogos/6.png" alt="Logo 6" width={128} height={128} />
          </LogoItem>,
          <LogoItem key={7} className="bg-white">
            <Image src="/CompanyLogos/7.png" alt="Logo 7" width={128} height={128} />
          </LogoItem>,
        ]}
      />
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }: { items: ReactElement[] }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      {/* <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      /> */}
    </div>
  );
};

const LogoItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default LogoOrigami;