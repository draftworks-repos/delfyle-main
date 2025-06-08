"use client";

import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Image from "next/image";
import footerImage from "/public/images/footer-image.png"; // Direct import of the image

const Footer = () => {
  const startupSections = [
    {
      title: "Registrations",
      items: [
        "StartUp Registration",
        "Trade License",
        "FSSAI Registration",
        "FSSAI License",
        "Halal Certification",
        "ICEGATE Registration",
        "ISO Registration",
        "PF Registration",
        "ESI Registration",
        "Professional Tax Registration",
        "RCMC Registration",
        "WB RERA Registration",
        "12A and 80G Registration",
        "12A Registration",
        "80G Registration",
        "Darpan Registration",
        "Udyam Registration",
        "Digital Signature",
        "Shop and Establishment Act Registration",
        "Drug License",
        "FCRA Registration",
        "Fire License",
      ],
    },
    {
      title: "MCA",
      items: [
        "Company Compliance",
        "LLP Compliance",
        "OPC Compliance",
        "Name Change - Company",
        "Company Registered Office Change",
        "DIN eKYC Filing",
        "DIN Reactivation",
        "Director Change",
        "Remove Director",
        "Appointment of Auditor",
        "DPT-3 Filing",
        "LLP Form 11 Filing",
        "Dormant Status Filing",
        "MOA Amendment",
        "AOA Amendment",
        "Authorized Capital Increase",
        "Share Transfer",
        "Demat of Shares",
        "Winding Up - LLP",
        "Winding Up - Company",
      ],
    },
    {
      title: "Trademark",
      items: [
        "Trademark Registration",
        "Trademark Objection",
        "Trademark Certificate",
        "Trademark Opposition",
        "Trademark Hearing",
        "Trademark Rectification",
        "Trademark Infringement Notice",
        "Trademark Renewal",
        "Trademark Restoration",
        "Trademark Transfer",
        "Expedited Trademark Registration",
        "Logo Design + Trademark Protection",
        "Design Registration",
        "Design Objection",
        "Copyright Registration",
        "Copyright Objections",
      ],
    },
    {
      title: "Income Tax",
      items: [
        "ITR-1 Return Filing",
        "ITR-2 Return Filing",
        "ITR-3 Return Filing",
        "ITR-4 Return Filing",
        "ITR-5 Return Filing",
        "ITR-6 Return Filing",
        "ITR-7 Return Filing",
        "TDS Return Filing",
        "Income Tax Notice",
        "TAN Registration",
        "15CA & 15CB Filing",
      ],
    },
    {
      title: "Compliance",
      items: [
        "FSSAI Renewal",
        "FSSAI Return Filing",
        "HR & Payroll Services",
        "PF Return Filing",
        "ESI Return Filing",
        "Professional Tax Return Filing",
        "Partnership Compliance",
        "Proprietorship Compliance",
        "Book-keeping",
      ],
    },
    {
      title: "Startup",
      items: [
        "Private Limited Company",
        "Limited Liability Partnership (LLP)",
        "One Person Company (OPC)",
        "Section 8 Company",
        "Partnership Firm",
        "Trust Registration",
        "Public Company",
        "Producer Company",
        "Nidhi Company",
      ],
    },
    {
      title: "Goods & Services Tax",
      items: [
        "GST Registration",
        "GST Return Filing",
        "GST Annual Return Filing (GSTR - 9)",
        "GST LUT Form",
        "GST Tax Notice",
        "GST Amendment",
        "GST Revocation",
        "GSTR-10",
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.emailSignup}>
          <div className={styles.siteLogo}>Delfyle</div>
          <div className={styles.socialIcons}>
            <FaFacebook className={styles.socialIcon} />
            <FaTwitter className={styles.socialIcon} />
            <FaInstagram className={styles.socialIcon} />
            <FaLinkedin className={styles.socialIcon} />
          </div>
          <div className={styles.emailInputContainer}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.emailInput}
            />
            <FiSend className={styles.sendIcon} />
          </div>
          <div className={styles.footerLinks}>
            <span className={styles.privacyPolicy}>Privacy Policy</span>
          </div>
        </div>

        {/* New wrapper for sections and image */}
        <div className={styles.mainFooterContent}>
          <div className={styles.sectionsContainer}>
            <div className={styles.sectionRow}>
              {startupSections.slice(0, 4).map((section, index) => (
                <div key={index} className={styles.section}>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                  <div className={styles.sectionContent}>
                    <ul>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.sectionRow}>
              {startupSections.slice(4, 7).map((section, index) => (
                <div key={index + 4} className={styles.section}>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                  <div className={styles.sectionContent}>
                    <ul>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footerContainer}>
          <div className={styles.mainContent}>
            <div className={styles.logoContainer}>
              <h3 className={styles.certifiedTitle}>Delfyle</h3>
            </div>
            <div className={styles.copyright}>
              © 2025 Emato Trademarks and brands are the property of their
              respective owners
            </div>
          </div>
          <div className={styles.languageDropdown}>
            {/* Language dropdown would go here */}
          </div>
        </div>
      </div>
      <div className={styles.footerImageContainer}>
        <Image
          src={footerImage}
          alt="Footer Image"
          fill
          className={styles.footerImage}
        />
      </div>
    </footer>
  );
};

export default Footer;
