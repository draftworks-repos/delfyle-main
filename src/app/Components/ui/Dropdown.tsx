import React, { useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.css';

interface DropdownItem {
  icon: React.ReactNode;
  label: string;
}

export interface DropdownProps {
  items: DropdownItem[];
  columns: number;
  positionRef: React.RefObject<HTMLElement>;
  open: boolean;
  onClose: () => void;
  className?: string; // for custom height/width
}

export const Dropdown: React.FC<DropdownProps> = ({ items, columns, positionRef, open, onClose, className }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ left: number; top: number }>({ left: 0, top: 0 });

  useEffect(() => {
    if (open && positionRef.current) {
      const rect = positionRef.current.getBoundingClientRect();
      setPosition({
        left: rect.left,
        top: rect.bottom + window.scrollY,
      });
    }
  }, [open, positionRef]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        positionRef.current &&
        !positionRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, onClose, positionRef]);

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdown} ${className || ''}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      role="menu"
      tabIndex={-1}
    >
      <div
        className={styles.dropdownGrid}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={styles.dropdownItem}
            tabIndex={0}
          >
            <span className={styles.dropdownIcon}>{item.icon}</span>
            <span className={styles.dropdownLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Placeholder SVG icon
export const PlaceholderIcon = (
  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
    <rect width="20" height="20" rx="4" fill="#E5E7EB" />
    <path d="M6 10h8M10 6v8" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
); 