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
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
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
        <button className={buttonStyle}>
            {text}
            <Image alt="arrow" className={styles.arrow} src={Arrow} />
        </button>
    );
};

export default Button;
