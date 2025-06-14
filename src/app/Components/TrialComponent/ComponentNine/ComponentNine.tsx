"use client";

import React from 'react';
import styles from './ComponentNine.module.css';

interface FeatureCard {
  icon?: string;
  title: string;
  description: string;
}

interface ComponentNineProps {
  tagline?: string;
  title?: string;
  description?: string;
  features?: FeatureCard[];
  showTagline?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
}

const defaultProps = {
  tagline: "Get started quickly",
  title: "ComponentNine",
  description: "Our team of experts will help you implement and integrate our solutions into your existing systems, ensuring a smooth transition and maximum efficiency.",
  showTagline: true,
  showTitle: true,
  showDescription: true,
  features: [
    {
      title: "Launch faster",
      description: "Go live with Stripe quickly with our iterative and hands-on approach."
    },
    {
      title: "Design for scale",
      description: "We incorporate the complexities of your business to deliver a custom solution that scales."
    },
    {
      title: "Minimise risk",
      description: "Build once and avoid technology and compliance pitfalls that can delay timelines."
    },
    {
      title: "Unlock more value",
      description: "Discover additional ways to use Stripe to streamline your technology stack."
    }
  ]
};

const ComponentNine: React.FC<ComponentNineProps> = ({
  tagline = defaultProps.tagline,
  title = defaultProps.title,
  description = defaultProps.description,
  features = defaultProps.features,
  showTagline = defaultProps.showTagline,
  showTitle = defaultProps.showTitle,
  showDescription = defaultProps.showDescription
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        {showTagline && <p className={styles.tagline}>{tagline}</p>}
        {showTitle && <h2 className={styles.mainHeading}>{title}</h2>}
        {showDescription && <p className={styles.mainDescription}>{description}</p>}
      </div>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>
              {feature.icon && <img src={feature.icon} alt={feature.title} />}
            </div>
            <h3 className={styles.featureHeading}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentNine; 