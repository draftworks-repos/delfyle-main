import React, { useState, useRef, useEffect } from 'react';
import styles from './ModernContactForm.module.css';

interface CustomDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, options, value, onChange, name, placeholder }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdownWrapper} ref={ref}>
      <label className={styles.label}>{label}
        <div
          className={styles.dropdownField}
          tabIndex={0}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={value ? styles.dropdownValue : styles.dropdownPlaceholder}>
            {value || placeholder || 'Select...'}
          </span>
          <span className={styles.dropdownArrow}>▼</span>
        </div>
        {open && (
          <div className={styles.dropdownList}>
            {options.map((option, idx) => (
              <div
                key={option + idx}
                className={styles.dropdownOption + (option === value ? ' ' + styles.selected : '')}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </label>
    </div>
  );
};

export default CustomDropdown; 