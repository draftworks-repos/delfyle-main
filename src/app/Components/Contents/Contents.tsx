"use client";

import React from "react";
import Image from "next/image";
import styles from "./contents.module.css";
import HeroImage from "../../../../public/images/hero-image.png";
import Button from "../Button/Button";

const Contents = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.description}>
        <p className={styles.p}>
        From registration to regulation, Delfyle is your trusted partner for seamless business setup, accounting,  legal compliance, HR, and more.

        </p>
        <div className={styles.buttons}>
          <Button text="Start now" type="smallWhatWeDoButton"></Button>
        </div>
      </div>
      <Image alt="hero image" className="max-w-none" src={HeroImage} />
    </div>
  );
};

export default Contents;
