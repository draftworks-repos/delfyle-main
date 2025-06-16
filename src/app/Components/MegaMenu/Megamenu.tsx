'use client'

// components/MegaMenu/MegaMenu.tsx
import { useState, useRef, useEffect } from 'react';
import styles from './MegaMenu.module.css';

type MenuKey = 'product' | 'developer' | 'company' | null;

export default function MegaMenu() {
  const [activeKey, setActiveKey] = useState<MenuKey>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeKey && backgroundRef.current && wrapRef.current) {
      const panel = document.querySelector(`[data-panel="${activeKey}"]`) as HTMLDivElement;
      const dims = panel.getBoundingClientRect();
      const wrapDims = wrapRef.current.getBoundingClientRect();

      backgroundRef.current.style.width = `${dims.width}px`;
      backgroundRef.current.style.height = `${dims.height}px`;
      backgroundRef.current.style.transform = `translate(${dims.left - wrapDims.left}px, ${dims.top - wrapDims.top}px)`;
      backgroundRef.current.classList.add(styles.bgVisible);
    } else if (backgroundRef.current) {
      backgroundRef.current.classList.remove(styles.bgVisible);
    }
  }, [activeKey]);

  const menuItems: { key: MenuKey, label: string }[] = [
    { key: 'product', label: 'Product' },
    { key: 'developer', label: 'Developer' },
    { key: 'company', label: 'Company' },
  ];

  return (
    <div className={styles.header}>
      <ul className={styles.menu}>
        {menuItems.map(item => (
          <li
            key={item.key}
            className={styles.menuItem}
            onMouseEnter={() => setActiveKey(item.key)}
            onMouseLeave={() => setActiveKey(null)}
          >
            <a href="#">{item.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.dropdownWrapper} ref={wrapRef} onMouseLeave={() => setActiveKey(null)}>
        <div ref={backgroundRef} className={styles.dropdownBg} />

        {menuItems.map(item => (
          <div
            key={item.key}
            data-panel={item.key || ''}
            className={`${styles.panel} ${activeKey === item.key ? styles.panelVisible : ''}`}
          >
            <div className={styles.panelContent}>
              <h3>{item.label} Menu</h3>
              <p>Sample content for the {item.label.toLowerCase()} menu.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
