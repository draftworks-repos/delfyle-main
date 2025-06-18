'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StickyFeatureReveal.module.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: '✅', title: 'End-to-End Services', desc: 'From company setup to compliance.' },
  { icon: '💼', title: 'Expert Team', desc: 'Chartered Accountants, CS, Lawyers and Legal Experts.' },
  { icon: '📍', title: 'Pan-India Presence', desc: 'Remote and city-based operations.' },
  { icon: '🔐', title: 'Secure & Confidential', desc: 'Fully compliant with data protection norms.' },
  { icon: '⚙️', title: 'Tech-Enabled Process', desc: 'Seamless, paperless workflows.' },
];

const StickyFeatureReveal = () => {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 270px',
        end: 'bottom 650px',
        pin: pinRef.current,
        pinSpacing: false,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={styles.stickyFeatureSection}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Left: Scrollable Fields */}
      <div className={styles.leftCol}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-block ${styles.featureBlock}`}
            ref={el => { featureRefs.current[index] = el; }}
          >
            <div className={styles.featureInner}>
              <div className={styles.featureLogo}>{feature.icon}</div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Pinned Block (with GSAP) */}
      <div className={styles.rightCol} ref={pinRef}>
        <div className={styles.pinnedBlock}>
          <h2 className={styles.pinnedTitle}>Svg Goes Here</h2>
        </div>
      </div>
    </div>
  );
};

export default StickyFeatureReveal;
