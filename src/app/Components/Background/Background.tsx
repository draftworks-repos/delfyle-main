"use client";
import React from "react";
import styles from "./background.module.css";

const Background = () => {
  return (
    <div className={`${styles.canvas} spline-background`}>
      <video
        src="/Backgrounds/Compress1.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default Background;
