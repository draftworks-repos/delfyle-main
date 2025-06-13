import React from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 20, direction = 'left' }) => {
  return (
    <div className={styles.marqueeContainer}>
      <div
        className={`${styles.marqueeContent} ${direction === 'left' ? styles.scrollLeft : styles.scrollRight}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{text}</span>
        <span>{text}</span> {/* Duplicate content for seamless loop */}
      </div>
    </div>
  );
};

export default Marquee; 