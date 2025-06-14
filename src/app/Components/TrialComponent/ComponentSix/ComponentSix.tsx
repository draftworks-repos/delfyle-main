"use client";

import React from 'react';
import styles from './ComponentSix.module.css';
import Button from '../../Button/Button';

interface ComponentSixProps {
  mainHeading?: string;
  mainDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  showCtaButton?: boolean;
  showRightContentPlaceholder?: boolean;
  showMainHeading?: boolean;
  showMainDescription?: boolean;
}

const defaultProps = {
  mainHeading: "ComponentSix",
  mainDescription: "Simplify operations and centralise reporting across\n\nbusiness lines and geographies with Stripe\n\nOrganisations.",
  ctaButtonText: "Get started",
  ctaButtonLink: "#",
  showCtaButton: true,
  showRightContentPlaceholder: true,
  showMainHeading: true,
  showMainDescription: true,
};

const ComponentSix: React.FC<ComponentSixProps> = ({
  mainHeading = defaultProps.mainHeading,
  mainDescription = defaultProps.mainDescription,
  ctaButtonText = defaultProps.ctaButtonText,
  ctaButtonLink = defaultProps.ctaButtonLink,
  showCtaButton = defaultProps.showCtaButton,
  showRightContentPlaceholder = defaultProps.showRightContentPlaceholder,
  showMainHeading = defaultProps.showMainHeading,
  showMainDescription = defaultProps.showMainDescription,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          {showMainHeading && <h2 className={styles.mainHeading}>{mainHeading}</h2>}
          {showMainDescription && (
            <p className={styles.mainDescription}>
              {mainDescription}
            </p>
          )}
          {showCtaButton && (
            <Button
              type="smallWhatWeDoButton"
              text={ctaButtonText}
              onClick={() => (window.location.href = ctaButtonLink || "#")}
            />
          )}
        </div>
        {showRightContentPlaceholder && (
          <div className={styles.rightContentPlaceholder}>
            <div className={styles.blankDiffContainer}>
              {/* Blank diff color container */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComponentSix; 