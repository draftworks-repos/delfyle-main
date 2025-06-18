import React from "react";
import styles from "./titleblend.module.css";

const TitleBlend = () => {
  return (
    <div className={`${styles.title} title-blend`}>
      <div className={styles.titleBlend}>
        <h1 className={styles.welcomeTo}>Welcome to</h1>
        <h1 className={styles.titleDelfyle}>Delfyle</h1>
        <h1 className={styles.subTitle}>
          Your One-Stop
          <br />
          Solution to Launch,
          <br />
          Manage & Grow Your
          <br />
          Dream Business!
        </h1>
      </div>
    </div>
  );
};

export default TitleBlend;
