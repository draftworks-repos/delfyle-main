import React from "react";
import Logo from "../../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
        <li className={styles.logo} style={{ display: "none" }}>
          {/* <Image alt="logo" src={Logo}></Image> */}
        </li>
        <li className={styles.li}>
          <Link href="/startup" className={styles.a}>
            Startup
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/trademark" className={styles.a}>
            Trademark
          </Link>
                </li>
                <li className={styles.li}>
          <Link href="/registrations" className={styles.a}>
            Registrations
                    </Link>
                </li>
                <li className={styles.li}>
          <Link href="/goods-services-tax" className={styles.a}>
            Goods & Services Tax
                    </Link>
                </li>
                <li className={styles.li}>
          <Link href="/mca" className={styles.a}>
            MCA
                    </Link>
                </li>
                <li className={styles.li}>
          <Link href="/income-tax" className={styles.a}>
            Income Tax
                    </Link>
                </li>
                <li className={styles.li}>
          <Link href="/about" className={styles.a}>
            About
                    </Link>
                </li>
            </ul>
            <div className={styles.buttons}>
                <Button text="Contact sales" type="whiteButtonNoBackground" />
                <Button text="Sign in" type="whiteButtonWithBackground" />
            </div>
        </nav>
    );
};

export default Navbar;
