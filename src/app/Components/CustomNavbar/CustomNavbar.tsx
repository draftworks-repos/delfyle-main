'use client';
import { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import styles from './CustomNavbar.module.css';

interface DropdownItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface NavItem {
  name: string;
  link: string;
  dropdown?: {
    title: string;
    items: DropdownItem[];
    width?: string;
    height?: string;
    layout?: 'grid' | 'list' | 'custom';
    columns?: number;
    arrowPosition?: 'left' | 'center' | 'right';
    arrowOffset?: string;
    dropdownPosition?: 'left' | 'center' | 'right';
    arrowStrategy?: 'fixed' | 'dynamic' | 'relative';
  };
}

interface CustomNavbarProps {
  items: NavItem[];
}

export default function CustomNavbar({ items }: CustomNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav 
      ref={ref}
      className={styles.navbar} 
      role="navigation" 
      aria-label="Main navigation"
      animate={{
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: isScrolled ? "60%" : "100%",
        y: isScrolled ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
        mass: 1,
        duration: 1
      }}
      style={{
        minWidth: "100px",
      }}
    >
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <a href="/" className={styles.logoLink}>
              Logo
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className={styles.desktopNav}>
            {items.map((item, index) => (
              <div 
                key={index} 
                className={styles.navItem}
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={item.link} className={styles.navLink}>
                  {item.name}
                </a>
                {item.dropdown && activeDropdown === index && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`${styles.dropdown} ${styles[`dropdown-${item.dropdown.dropdownPosition || 'center'}`]} ${styles[`arrow-${item.dropdown.arrowPosition || 'center'}`]}`}
                      style={{
                        width: item.dropdown.width || 'auto',
                        height: item.dropdown.height || 'auto',
                        minWidth: '320px',
                        '--arrow-offset': item.dropdown.arrowOffset || '0%',
                        '--grid-columns': item.dropdown.columns || 3,
                      } as React.CSSProperties}
                    >
                      <div className={styles.dropdownContent}>
                        <h3 className={styles.dropdownTitle}>{item.dropdown.title}</h3>
                        <div className={`${styles.dropdownGrid} ${styles[`layout-${item.dropdown.layout || 'grid'}`]}`}>
                          {item.dropdown.items.map((dropdownItem, idx) => (
                            <a
                              key={idx}
                              href={dropdownItem.link}
                              className={styles.dropdownItem}
                            >
                              <div className={styles.dropdownItemContent}>
                                {dropdownItem.icon && (
                                  <div className={styles.dropdownItemIcon}>
                                    {dropdownItem.icon}
                                  </div>
                                )}
                                <span className={styles.dropdownItemName}>
                                  {dropdownItem.name}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <a href="/signin" className={styles.signInLink}>
              Sign In
            </a>
            <a href="/contact" className={styles.ctaLink}>
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.mobileMenuToggle}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={styles.mobileMenuIcon}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {items.map((item, index) => (
              <div key={index} className={styles.mobileMenuItem}>
                <a href={item.link} className={styles.mobileMenuLink}>
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className={styles.mobileDropdown}>
                    {item.dropdown.items.map((dropdownItem, idx) => (
                      <a
                        key={idx}
                        href={dropdownItem.link}
                        className={styles.mobileDropdownItem}
                      >
                        {dropdownItem.icon && (
                          <div className={styles.mobileDropdownItemIcon}>
                            {dropdownItem.icon}
                          </div>
                        )}
                        <span className={styles.mobileDropdownItemName}>
                          {dropdownItem.name}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className={styles.mobileCtaButton}>
              <a href="/signin" className={styles.mobileSignInLink}>
                Sign In
              </a>
              <a href="/contact" className={styles.mobileCtaLink}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
} 