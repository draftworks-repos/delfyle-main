import React from "react";
import styles from "./button.module.css";
import Image from "next/image";
import Arrow from "../../../../public/images/arrow.svg";

interface ButtonProps {
  text: string;
  type: "whiteButtonNoBackground" | "whiteButtonWithBackground";
  onClick?: () => void;
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  const buttonStyle = type === "whiteButtonNoBackground" 
    ? styles.whiteButtonNoBackground 
    : styles.whiteButtonWithBackground;

  return (
    <button 
      className={buttonStyle} 
      onClick={onClick}
      suppressHydrationWarning
    >
      {text}
      <Image alt="arrow" className={styles.arrow} src={Arrow} />
    </button>
  );
};

export default Button;
