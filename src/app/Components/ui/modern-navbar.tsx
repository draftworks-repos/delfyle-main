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
        width: visible ? "55%" : "100%",
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

export const ModernNavItems = ({ items, className, onItemClick, visible }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleMouseEnter = (idx: number) => {
    if (items[idx].dropdown) {
      if (activeDropdown !== null) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveDropdown(idx);
          setIsTransitioning(false);
        }, 150);
      } else {
        setActiveDropdown(idx);
      }
    }
    setHovered(idx);
  };

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
        setActiveDropdown(null);
        setIsTransitioning(false);
      }}
      className={cn(styles.modernNavItems, visible && styles.visible, className)}
    >
      {/* Dropdown Background */}
      <AnimatePresence>
        {activeDropdown !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.dropdownBackground}
            style={{
              height: "400px",
              zIndex: 40,
              minWidth: "320px",
              maxWidth: "480px",
              width: "fit-content"
            }}
          >
            <div className={styles.dropdownContent}>
              {items[activeDropdown].dropdown && (
                <motion.div
                  key={activeDropdown}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <div>
                    <h3 className={styles.dropdownTitle}>
                      {items[activeDropdown].dropdown.title}
                    </h3>
                    <div className={styles.dropdownGrid}>
                      {items[activeDropdown].dropdown.items.map((dropdownItem, index) => (
                        <a
                          key={`dropdown-item-${index}`}
                          href={dropdownItem.link}
                          className={styles.dropdownItem}
                        >
                          {dropdownItem.icon && (
                            <div className="mt-1">{dropdownItem.icon}</div>
                          )}
                          <div>
                            <p className={styles.dropdownItemName}>
                              {dropdownItem.name}
                            </p>
                            <p className={styles.dropdownItemDescription}>
                              {dropdownItem.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Items */}
      {items.map((item, idx) => (
        <div
          key={`nav-item-${idx}`}
          className={styles.navItem}
          onMouseEnter={() => handleMouseEnter(idx)}
        >
          <a
            onClick={onItemClick}
            className={cn(styles.navLink, visible && styles.visible)}
            href={item.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className={styles.navLinkHover}
              />
            )}
            <span className={styles.navLinkText}>{item.name}</span>
          </a>
        </div>
      ))}
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
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
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