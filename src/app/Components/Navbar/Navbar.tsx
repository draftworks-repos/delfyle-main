"use client";

import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import Button from "../Button/Button";
import { gsap } from "gsap";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (dropdownRef.current) {
            if (isDropdownOpen) {
                gsap.to(dropdownRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power3.out",
                    pointerEvents: "all",
                });
            } else {
                gsap.to(dropdownRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.3,
                    ease: "power3.in",
                    pointerEvents: "none",
                });
            }
        }
    }, [isDropdownOpen]);

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
        <li className={styles.logo} style={{ display: "none" }}>
          {/* <Image alt="logo" src={Logo}></Image> */}
        </li>
        <li
          className={`${styles.li} ${styles.dropdownToggle}`}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link href="/startup" className={styles.a}>
            Startup
          </Link>
          <div
            ref={dropdownRef}
            className={styles.dropdownMenu}
            style={{ opacity: 0, transform: "translateY(20px)", pointerEvents: "none" }} /* Initial state for GSAP */
          >
            <div className={styles.dropdownContent}>
              <div className={styles.mainColumns}>
                <div className={styles.column}>
                  <h3 className={styles.sectionTitle}>GLOBAL PAYMENTS</h3>
                  <ul className={styles.sectionList}>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Payments</h4>
                        <p className={styles.itemSubtitle}>Online payments</p>
                      </div>
                    </li>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Terminal</h4>
                        <p className={styles.itemSubtitle}>In-person payments</p>
                      </div>
                    </li>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Radar</h4>
                        <p className={styles.itemSubtitle}>Fraud prevention</p>
                      </div>
                    </li>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Authorization</h4>
                        <p className={styles.itemSubtitle}>Acceptance optimisations</p>
                      </div>
                    </li>
                  </ul>
                  <div className={styles.subItems}>
                    <div className={styles.subItem}>
                      Payment Links &bull; No-code payments
                    </div>
                    <div className={styles.subItem}>
                      Checkout &bull; Pre-built payment form
                    </div>
                    <div className={styles.subItem}>
                      Elements &bull; Flexible UI components
                    </div>
                  </div>
                </div>
                <div className={styles.column}>
                  <h3 className={styles.sectionTitle}>MONEY MANAGEMENT</h3>
                  <ul className={styles.sectionList}>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Connect</h4>
                        <p className={styles.itemSubtitle}>Payments for platforms</p>
                      </div>
                    </li>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Global Payouts</h4>
                        <p className={styles.itemSubtitle}>Send money to third parties</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className={styles.sectionTitle}>REVENUE AND FINANCE AUTOMATION</h3>
                  <ul className={styles.sectionList}>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Billing</h4>
                        <p className={styles.itemSubtitle}>Subscriptions and usage-based</p>
                      </div>
                    </li>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Revenue Recognition</h4>
                        <p className={styles.itemSubtitle}>Accounting automation</p>
                      </div>
                    </li>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Tax</h4>
                        <p className={styles.itemSubtitle}>Sales tax & VAT automation</p>
                      </div>
                    </li>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Invoicing</h4>
                        <p className={styles.itemSubtitle}>Online invoices</p>
                      </div>
                    </li>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Sigma</h4>
                        <p className={styles.itemSubtitle}>Custom reports</p>
                      </div>
                    </li>
                    <li className={styles.sectionItem}>
                      <div className={styles.iconPlaceholder}></div>
                      <div className={styles.itemText}>
                        <h4 className={styles.itemTitle}>Data Pipeline</h4>
                        <p className={styles.itemSubtitle}>Data sync</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.moreColumn}>
                <h3 className={styles.sectionTitle}>MORE</h3>
                <ul className={styles.moreList}>
                  <li className={styles.moreItem}>Payment methods</li>
                  <li className={styles.moreItem}>Link</li>
                  <li className={styles.moreItem}>Financial Connections</li>
                  <li className={styles.moreItem}>Identity</li>
                  <li className={styles.moreItem}>Atlas</li>
                  <li className={styles.moreItem}>Climate</li>
                </ul>
              </div>
            </div>
          </div>
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
