import React from 'react';
import Image from 'next/image';
import styles from './LogoMarquee.module.css';

interface LogoMarqueeProps {
  logos: string[];
  direction?: 'left' | 'right';
  speed?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  logos,
  direction = 'left',
  speed = '60s',
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[`wrapper--${direction}`]}`}>
      <div className={`${styles.marquee} ${styles[`marquee--${direction}`]}`}>
        <div className={styles.marquee__group} style={{ animationDuration: speed }}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image src={logo} alt={`Company Logo ${index}`} width={80} height={50} objectFit="contain" />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className={styles.marquee__group} style={{ animationDuration: speed }}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image src={logo} alt={`Company Logo ${index}`} width={80} height={50} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee; 