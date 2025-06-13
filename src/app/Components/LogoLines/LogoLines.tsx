import React from "react";
import styles from "./LogoLines.module.css";

const LogoLines: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.topRow}>
      <div className={styles.tab} />
    </div>
    <div className={styles.middleRow}>
      <div className={styles.sideCol}>
        <div className={styles.tab} />
        <div className={styles.tab} />
      </div>
      <div className={styles.circle} />
      <div className={styles.sideCol}>
        <div className={styles.tab} />
        <div className={styles.tab} />
      </div>
    </div>
  </div>
);

export default LogoLines; 