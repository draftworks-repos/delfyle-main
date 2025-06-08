import React from "react";
import styles from "./button.module.css";
import Image from "next/image";
import Arrow from "../../../../public/images/arrow.svg";

interface ButtonProps {
  text: string;
  type?:
    | "whiteButtonWithBackground"
    | "whiteButtonNoBackground"
    | "blackButtonWithBackground"
    | "blackButtonNoBackground";
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ text, type, id = "btn" }) => {
  let buttonStyle = "";

  switch (type) {
    case "whiteButtonWithBackground":
      buttonStyle = styles.whiteButtonWithBackground;
      break;
    case "whiteButtonNoBackground":
      buttonStyle = styles.whiteButtonNoBackground;
      break;
    case "blackButtonWithBackground":
      buttonStyle = styles.blackButtonWithBackground;
      break;
    case "blackButtonNoBackground":
      buttonStyle = styles.blackButtonNoBackground;
      break;
  }

  return (
    <button className={buttonStyle} id={id}>
      {text}
      <Image alt="arrow" className={styles.arrow} src={Arrow} />
    </button>
  );
};

export default Button;
