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
    | "blackButtonNoBackground"
    | "whatWeDoButton"
    | "smallBlackButtonWithBackground"
    | "smallWhatWeDoButton";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
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
    case "whatWeDoButton":
      buttonStyle = styles.whatWeDoButton;
      break;
    case "smallBlackButtonWithBackground":
      buttonStyle = styles.smallBlackButtonWithBackground;
      break;
    case "smallWhatWeDoButton":
      buttonStyle = styles.smallWhatWeDoButton;
      break;
  }

  return (
    <button className={buttonStyle} onClick={onClick}>
      {text}
      <Image alt="arrow" className={styles.arrow} src={Arrow} />
    </button>
  );
};

export default Button;
