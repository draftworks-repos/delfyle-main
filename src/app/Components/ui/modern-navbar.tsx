"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";
import styles from "./modern-navbar.module.css";
import { Dropdown, PlaceholderIcon } from "./Dropdown";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
    dropdown?: {
      title: string;
      items: {
        name: string;
        description: string;
        link: string;
        icon?: React.ReactNode;
      }[];
    };
  }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ModernNavbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn(styles.modernNavbar, className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const ModernNavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "60%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        styles.modernNavBody,
        visible && styles.visible,
        className,
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const ModernNavItems = ({ className, onItemClick, visible }: NavItemsProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      className={cn(styles.modernNavItems, visible && styles.visible, className)}
    >
      {/* 1st Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(0); setHovered(0); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(styles.navLink, visible && styles.visible)}
          href="#"
        >
          {hovered === 0 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Startup</span>
        </a>
        {openDropdown === 0 && (
          <div className={`${styles.dropdown} ${styles.dropdown1}`}>
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Private Limited Company</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Limited Liability Partnership (LLP)</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>One Person Company (OPC)</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Section 8 Company</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Partnership Firm</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trust Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Public Company</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Producer Company</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Nidhi Company</span></div>
            </div>
          </div>
        )}
      </div>
      {/* 2nd Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(1); setHovered(1); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(styles.navLink, visible && styles.visible)}
          href="#"
        >
          {hovered === 1 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Trademark</span>
        </a>
        {openDropdown === 1 && (
          <div className={`${styles.dropdown} ${styles.dropdown2}`}>
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Objection</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Certificate</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Opposition</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Hearing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Rectification</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Infringement Notice</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Renewal</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Restoration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trademark Transfer</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Expedited Trademark Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Logo Design + Trademark Protection</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Design Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Design Objection</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Copyright Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Copyright Objections</span></div>
            </div>
          </div>
        )}
      </div>
      {/* 3rd Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(2); setHovered(2); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(styles.navLink, visible && styles.visible)}
          href="#"
        >
          {hovered === 2 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Registrations</span>
        </a>
        {openDropdown === 2 && (
          <div className={`${styles.dropdown} ${styles.dropdown3}`}>
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>StartUp Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Trade License</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>FSSAI Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>FSSAI License</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Halal Certification</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ICEGATE Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ISO Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>PF Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ESI Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Professional Tax Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>RCMC Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>WB RERA Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>12A and 80G Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>12A Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>80G Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Darpan Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Udyam Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Digital Signature</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Shop and Establishment Act Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Drug License</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>FCRA Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Fire License</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>EPR Certficate</span></div>
            </div>
          </div>
        )}
      </div>
      {/* 4th Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(3); setHovered(3); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(styles.navLink, visible && styles.visible)}
          href="#"
        >
          {hovered === 3 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>GST</span>
        </a>
        {openDropdown === 3 && (
          <div className={`${styles.dropdown} ${styles.dropdown4}`}>
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>GST Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>GST Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>GST Annual Return Filing (GSTR - 9)</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>GST LUT Form</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>GST Tax Notice</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>GST Amendment</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>GST Revocation</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>GSTR-10</span></div>
            </div>
          </div>
        )}
      </div>
      {/* 5th Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(4); setHovered(4); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(styles.navLink, visible && styles.visible)}
          href="#"
        >
          {hovered === 4 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Compliance</span>
        </a>
        {openDropdown === 4 && (
          <div className={`${styles.dropdown} ${styles.dropdown5}`}>
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Company Compliance</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>LLP Compliance</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>OPC Compliance</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Name Change - Company</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Company Registered Office Change</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>DIN eKYC Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>DIN Reactivation</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Director Change</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Remove Director</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Appointment of Auditor</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>DPT-3 Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>LLP Form 11 Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Dormant Status Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>MOA Amendment</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>AOA Amendment</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Authorized Capital Increase</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Share Transfer</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Demat of Shares</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Winding Up - LLP</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Winding Up - Company</span></div>
            </div>
          </div>
        )}
      </div>
      {/* 6th Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(5); setHovered(5); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(styles.navLink, visible && styles.visible)}
          href="#"
        >
          {hovered === 5 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Services</span>
        </a>
        {openDropdown === 5 && (
          <div className={`${styles.dropdown} ${styles.dropdown6}`}>
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>FSSAI Renewal</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>FSSAI Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>HR & Payroll Services</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>PF Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ESI Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Professional Tax Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Partnership Compliance</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Proprietorship Compliance</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Book-keeping</span></div>
            </div>
          </div>
        )}
      </div>
      {/* 7th Nav Item */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(6); setHovered(6); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(styles.navLink, visible && styles.visible)}
          href="#"
        >
          {hovered === 6 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>Income Tax</span>
        </a>
        {openDropdown === 6 && (
          <div className={`${styles.dropdown} ${styles.dropdown7}`}>
            <div className={styles.dropdownGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ITR-1 Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ITR-2 Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ITR-3 Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ITR-4 Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ITR-5 Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ITR-6 Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>ITR-7 Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>TDS Return Filing</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>Income Tax Notice</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>TAN Registration</span></div>
              <div className={styles.dropdownItem}><span className={styles.dropdownIcon}>{PlaceholderIcon}</span><span className={styles.dropdownLabel}>15CA & 15CB Filing</span></div>
            </div>
          </div>
        )}
      </div>
      {/* 8th Nav Item (no dropdown) */}
      <div
        className={styles.navItem}
        onMouseEnter={() => { setOpenDropdown(7); setHovered(7); }}
        onMouseLeave={() => { setOpenDropdown(null); setHovered(null); }}
      >
        <a
          onClick={onItemClick}
          className={cn(styles.navLink, visible && styles.visible)}
          href="/about"
        >
          {hovered === 7 && (
            <motion.div layoutId="hovered" className={styles.navLinkHover} />
          )}
          <span className={styles.navLinkText}>About us</span>
        </a>
      </div>
    </motion.div>
  );
};

export const ModernMobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        styles.modernMobileNav,
        visible && styles.visible,
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const ModernMobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div className={cn(styles.modernMobileNavHeader, className)}>
      {children}
    </div>
  );
};

export const ModernMobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(styles.modernMobileNavMenu, className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModernMobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className={styles.mobileToggle} onClick={onClick} />
  ) : (
    <IconMenu2 className={styles.mobileToggle} onClick={onClick} />
  );
};

export const ModernNavbarLogo = ({ visible }: { visible?: boolean }) => {
  return (
    <a href="#" className={cn(styles.modernNavbarLogo, visible && styles.visible)}>
      <span className={cn(styles.logoText, visible && styles.visible)}>Delfyle</span>
    </a>
  );
};

export const ModernNavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  visible,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  visible?: boolean;
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  return (
    <Tag
      href={href || undefined}
      className={cn(styles.modernNavbarButton, styles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}; 