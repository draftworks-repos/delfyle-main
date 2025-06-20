import React from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  images: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({ images, speed = 20, direction = 'left' }) => {
  return (
    <div className={styles.marqueeContainer}>
      <div
        className={`${styles.marqueeContent} ${direction === 'left' ? styles.scrollLeft : styles.scrollRight}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`logo-${idx}`} className={styles.marqueeImage} />
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((src, idx) => (
          <img key={`dup-${idx}`} src={src} alt={`logo-dup-${idx}`} className={styles.marqueeImage} />
        ))}
      </div>
    </div>
  );
};

export default Marquee; 