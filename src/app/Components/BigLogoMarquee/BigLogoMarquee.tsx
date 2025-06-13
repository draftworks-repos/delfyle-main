import React from 'react';
import Image from 'next/image';
import styles from './BigLogoMarquee.module.css';

interface BigLogoMarqueeProps {
  logos: string[];
  direction?: 'left' | 'right';
  speed?: string;
}

const BigLogoMarquee: React.FC<BigLogoMarqueeProps> = ({
  logos,
  direction = 'left',
  speed = '70s',
}) => {
  // Double the logos array to ensure continuous scrolling
  const doubledLogos = [...logos, ...logos];
  
  return (
    <div className={`${styles.wrapper} ${styles[`wrapper--${direction}`]}`}>
      <div 
        className={`${styles.marquee} ${styles[`marquee--${direction}`]}`}
        style={{ '--duration': speed } as React.CSSProperties}
      >
        <div className={styles.marquee__group}>
          {doubledLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image src={logo} alt={`Company Logo ${index}`} width={192} height={120} objectFit="contain" />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className={styles.marquee__group}>
          {doubledLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image src={logo} alt={`Company Logo ${index}`} width={192} height={120} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigLogoMarquee; 