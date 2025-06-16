import React, { useState, useRef, useLayoutEffect } from 'react';
import styles from './ContactForm.module.css';
import gsap from 'gsap';

const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
const services = ['Web Development', 'Mobile Development', 'UI/UX Design', 'SEO', 'Digital Marketing', 'Content Writing', 'Graphic Design', 'Video Editing', 'Social Media Management', 'Copywriting', 'Translation', 'Voiceover', 'Data Entry', 'Virtual Assistant', 'Social Media Marketing', 'Email Marketing', 'Search Engine Optimization', 'Social Media Optimization', 'Social Media Management', 'Social Media Marketing', 'Social Media Optimization', 'Social Media Management', 'Social Media Marketing', 'Social Media Optimization'];

const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

const ContactForm = () => {
  const [greetText, setGreetText] = useState('Fill out the form');
  const greetRef = useRef<HTMLSpanElement>(null);

  const scrambleText = (text: string, duration: number = 0.5) => {
    const el = greetRef.current;
    if (!el) return;

    let currentText = '';
    const textLength = text.length;
    let iterations = 0;
    const maxIterations = 10;

    const interval = setInterval(() => {
      currentText = text
        .split('')
        .map((char, index) => {
          if (index < iterations) {
            return text[index];
          }
          return symbols[Math.floor(Math.random() * symbols.length)];
        })
        .join('');

      if (el) {
        el.textContent = currentText;
      }

      if (iterations >= textLength) {
        clearInterval(interval);
        el.textContent = text;
      }

      iterations += 1 / 3;
    }, 30);
  };

  const animateTextChange = (newText: string) => {
    const el = greetRef.current;
    if (!el) return;

    gsap.to(el, {
      y: -10,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        setGreetText(newText);
        scrambleText(newText);
        gsap.fromTo(
          el,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
      }
    });
  };

  const handleClick = () => {
    animateTextChange('Thank You');
    setTimeout(() => animateTextChange('Fill out the form'), 1800);
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentGrid}>
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <span className={styles.title}>Get in touch</span>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input type="text" className={styles.input} placeholder="Enter your full name" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Phone Number</label>
            <input type="tel" className={styles.input} placeholder="Enter your phone number" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>State</label>
            <select className={styles.select}>
              <option value="">Select your state</option>
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Choose Your Required Service</label>
            <select className={styles.select}>
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Message</label>
            <textarea rows={1} className={styles.textarea} placeholder="Your message"></textarea>
          </div>

          <div className={styles.buttonRow}>
            <button className={styles.sendButton} onClick={handleClick}>
              <span className={styles.sendIcon}>✉</span>
            </button>
          </div>
        </div>

        <div className={styles.greetContainer}>
          <div className={styles.header}>
            <div className={styles.greetTitleWrapper}>
              <span className={styles.greetTitle}>
                <span ref={greetRef}>{greetText}</span>
              </span>
            </div>
          </div>
          <hr className={styles.greetHr} />
          <span className={styles.greetsubHeading}>
            We'll be in touch. <br /> Shortly!
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
