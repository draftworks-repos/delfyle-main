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
                    Millions of companies of all sizes use Stripe online and in
                    person to accept payments, send payouts, automate financial
                    processes, and ultimately grow revenue.
                </p>
                <div className={styles.buttons}>
                    <Button
                        text="Start now"
                        type="blackButtonWithBackground"
                    ></Button>
                    <Button
                        text="Contact sales"
                        type="blackButtonNoBackground"
                    ></Button>
                </div>
            </div>
            <Image
                alt="hero image"
                className={styles.heroImage}
                src={HeroImage}
            />
        </div>
    );
};

export default Contents;
