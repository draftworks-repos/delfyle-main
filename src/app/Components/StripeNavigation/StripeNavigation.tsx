'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './StripeNavigation.module.css';

const ProductsDropdown = () => (
  <div className={styles.dropdownContent}>
    <div className={styles.linkGroup}>
      <ul className={styles.productsGroup}>
        <li>
          <a className={`${styles.linkContainer} ${styles.itemPayments}`} href="https://stripe.com/payments">
            <svg viewBox="0 0 48 48">
              <path fill="#87BBFD" className={styles.hoverFillLight} d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z" />
              <path fill="#555ABF" className={styles.hoverFillDark} d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z" />
              <path fill="#FFF" d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z" />
            </svg>
            <div className={styles.productLinkContent}>
              <h3 className={styles.linkTitle}>Payments</h3>
              <p className={styles.linkSub}>A complete commerce toolkit, built for developers.</p>
            </div>
          </a>
        </li>
        <li>
          <a className={`${styles.linkContainer} ${styles.itemSubscriptions}`} href="https://stripe.com/subscriptions">
            <svg viewBox="0 0 48 48">
              <path fill="#74E4A2" className={styles.hoverFillLight} d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z" />
              <path fill="#FFF" d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z" />
              <path fill="#159570" className={styles.hoverFillDark} d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z" />
            </svg>
            <div className={styles.productLinkContent}>
              <h3 className={styles.linkTitle}>Subscriptions</h3>
              <p className={styles.linkSub}>The smart engine for recurring payments.</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const DevelopersDropdown = () => (
  <div className={styles.dropdownContent}>
    <div className={styles.linkGroup}>
      <a className={`${styles.linkContainer} ${styles.withIcon} ${styles.itemDocumentation}`} href="https://stripe.com/docs">
        <h3 className={`${styles.linkTitle} ${styles.linkIcon}`}>
          <svg width="17" height="17">
            <path fill="#87BBFD" className={styles.hoverFillLight} d="M.945 1.998h3.632C6.744 1.998 8.5 3.005 8.5 4.83v11.583c-.512 0-1.015-.337-1.33-.59-1.03-.828-3.057-.828-5.222-.828H.945A.944.944 0 0 1 0 14.052V2.944C0 2.422.423 2 .945 2z" />
            <path fill="#6772E5" className={styles.hoverFillDark} d="M16.055 1.998h-3.632C10.257 1.998 8.5 3.005 8.5 4.83v11.583c.512 0 1.015-.337 1.33-.59 1.03-.828 3.057-.828 5.222-.828h1.003A.944.944 0 0 0 17 14.05V2.945A.944.944 0 0 0 16.055 2z" />
          </svg>
          Documentation
        </h3>
        <span className={styles.linkSub}>Start integrating Stripe's products and tools.</span>
      </a>
    </div>
  </div>
);

const CompanyDropdown = () => (
  <div className={styles.dropdownContent}>
    <ul className={`${styles.linkGroup} ${styles.linkList} ${styles.companyGroup}`}>
      <li>
        <a className={`${styles.linkContainer} ${styles.itemAbout}`} href="https://stripe.com/about">
          <h3 className={`${styles.linkTitle} ${styles.linkIcon}`}>
            <svg width="17" height="17">
              <path fill="#6772E5" className={styles.hoverFillDark} d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm.178-10.89c.76 0 1.726.278 2.486.69V4.443c-.828-.33-1.656-.502-2.484-.502-2.028 0-3.41 1.06-3.41 2.83 0 2.77 3.8 2.32 3.8 3.513 0 .462-.37.612-.93.612-.827 0-1.867-.366-2.706-.823v2.388c.93.4 1.843.592 2.705.592 2.077 0 3.48-1.027 3.48-2.827 0-2.98-3.82-2.447-3.82-3.572-.003-.39.352-.542.877-.542z" />
            </svg>
            About Stripe
          </h3>
        </a>
      </li>
    </ul>
  </div>
);

const StripeNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (id: string, event: React.MouseEvent) => {
    setActiveDropdown(id);
    const rect = event.currentTarget.getBoundingClientRect();
    setDropdownPosition({ x: rect.left, y: rect.bottom });
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const renderDropdownContent = () => {
    switch (activeDropdown) {
      case 'products':
        return <ProductsDropdown />;
      case 'developers':
        return <DevelopersDropdown />;
      case 'company':
        return <CompanyDropdown />;
      default:
        return null;
    }
  };

  return (
    <header className={styles.globalNav}>
      <div className={styles.containerLg}>
        <ul className={styles.navRoot}>
          {/* Logo Section */}
          <li className={styles.navSection}>
            <a className={`${styles.rootLink} ${styles.itemHome} ${styles.colorize}`} href="/">
              <h1>
                <svg width="62" height="25">
                  <title>Stripe</title>
                  <path d="M5 10.1c0-.6.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z" />
                </svg>
              </h1>
            </a>
          </li>

          {/* Primary Navigation */}
          <li className={styles.navSection}>
            <a 
              className={`${styles.rootLink} ${styles.itemProducts} ${styles.hasDropdown} ${styles.colorize}`}
              data-dropdown="products"
              onMouseEnter={(e) => handleMouseEnter('products', e)}
              onMouseLeave={handleMouseLeave}
            >
              Products
            </a>
            <a 
              className={`${styles.rootLink} ${styles.itemDevelopers} ${styles.hasDropdown} ${styles.colorize}`}
              data-dropdown="developers"
              onMouseEnter={(e) => handleMouseEnter('developers', e)}
              onMouseLeave={handleMouseLeave}
            >
              Developers
            </a>
            <a 
              className={`${styles.rootLink} ${styles.itemCompany} ${styles.hasDropdown} ${styles.colorize}`}
              data-dropdown="company"
              onMouseEnter={(e) => handleMouseEnter('company', e)}
              onMouseLeave={handleMouseLeave}
            >
              Company
            </a>
          </li>

          {/* Secondary Navigation */}
          <li className={styles.navSection}>
            <a className={`${styles.rootLink} ${styles.itemSupport} ${styles.colorize}`} href="https://support.stripe.com">
              Support
            </a>
            <a className={`${styles.rootLink} ${styles.itemDashboard} ${styles.colorize}`} href="https://dashboard.stripe.com/login">
              Sign in
            </a>
          </li>

          {/* Mobile Menu */}
          <li className={styles.navSection}>
            <a className={`${styles.rootLink} ${styles.itemMobileMenu} ${styles.colorize}`}>
              <h2>Menu</h2>
            </a>
          </li>
        </ul>
      </div>

      {/* Dropdown Container */}
      <div className={styles.dropdownRoot}>
        <div 
          className={styles.dropdownBackground}
          style={{
            transform: `translateX(${dropdownPosition.x}px) scaleX(0.707692) scaleY(1.1075)`
          }}
        >
          <div className={styles.alternateBackground} />
        </div>
        <div 
          className={styles.dropdownArrow}
          style={{
            transform: `translateX(${dropdownPosition.x + 184}px) rotate(45deg)`
          }}
        />
        <div 
          className={styles.dropdownContainer}
          style={{
            transform: `translateX(${dropdownPosition.x}px)`,
            width: '368px',
            height: '443px'
          }}
        >
          <AnimatePresence>
            {activeDropdown && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.dropdownSection}
                data-dropdown={activeDropdown}
              >
                {renderDropdownContent()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default StripeNavigation; 