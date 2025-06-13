import React from "react";
import styles from "./IntegrationTabs.module.css";

const integrations = [
  {
    icon: "🟣", // Placeholder for integration icon
    name: "Create integration",
    status: "New",
    statusType: "new",
  },
  {
    icon: "🎵", // TikTok
    name: "Tik Tok Ads",
    status: "Active",
    statusType: "active",
  },
  {
    icon: "🅰️", // Google Ads
    name: "Google Ads",
    status: "Active",
    statusType: "active",
  },
  {
    icon: "Ⓜ️", // Facebook
    name: "Facebook Ads",
    status: "Active",
    statusType: "active",
  },
  {
    icon: "🅱️", // Bing
    name: "Bing Ads",
    status: "Active",
    statusType: "active",
  },
];

const IntegrationTabs: React.FC = () => (
  <div className={styles.tabsContainer}>
    {integrations.map((item, idx) => (
      <div
        key={item.name}
        className={
          idx === 0
            ? `${styles.tab} ${styles.tabGradient}`
            : styles.tab
        }
      >
        <span className={styles.icon}>{item.icon}</span>
        <span className={styles.name}>{item.name}</span>
        <span
          className={
            item.statusType === "new"
              ? styles.badgeNew
              : styles.badgeActive
          }
        >
          {item.status}
        </span>
      </div>
    ))}
  </div>
);

export default IntegrationTabs; 