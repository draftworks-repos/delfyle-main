import React from "react";
import styles from "./StartupHero.module.css";

const StartupHero = () => {
  return (
    <section className={styles.heroSection}>
      <video
        className={styles.videoBg}
        src={"/Backgrounds/golden-lines.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Build the next<br />
            era of your <span className={styles.colored}>enterprise</span>
          </h1>
          <p className={styles.description}>
            Leading enterprises use Stripe to revolutionise their business – from Amazon’s rapid expansion into global markets to BMW’s re-imagination of the customer experience.
          </p>
          <button className={styles.cta}>Contact sales &nbsp; &gt;</button>
        </div>
        <div className={styles.right}>
          <div className={styles.cardStack}>
            <div className={styles.cardWrapper} style={{ top: '0', left: '0', zIndex: 3 }}>
              <div className={styles.card}></div>
            </div>
            <div className={styles.cardWrapper} style={{ top: '40px', left: '40px', zIndex: 2 }}>
              <div className={styles.card}></div>
            </div>
            <div className={styles.cardWrapper} style={{ top: '80px', left: '80px', zIndex: 1 }}>
              <div className={styles.card}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupHero; 