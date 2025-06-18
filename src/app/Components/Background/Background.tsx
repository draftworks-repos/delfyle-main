"use client";
import React from "react";
import styles from "./background.module.css";
import Spline from "@splinetool/react-spline";

const Background = () => {
  return (
    <div className={`${styles.canvas} spline-background`}>
      <Spline scene="https://prod.spline.design/TUFzW6NrUlVBSDUk/scene.splinecode" />
    </div>
  );
};

export default Background;
