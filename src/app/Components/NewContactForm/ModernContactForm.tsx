'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './ModernContactForm.module.css';
import { FaPaperPlane } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];
const services = [
  'Web Development', 'Mobile Development', 'UI/UX Design', 'SEO', 'Digital Marketing',
  'Content Writing', 'Graphic Design', 'Video Editing', 'Social Media Management',
  'Copywriting', 'Translation', 'Voiceover', 'Data Entry', 'Virtual Assistant',
  'Social Media Marketing', 'Email Marketing', 'Search Engine Optimization',
  'Social Media Optimization', 'Social Media Management', 'Social Media Marketing', 'Social Media Optimization', 'Social Media Management', 'Social Media Marketing', 'Social Media Optimization'
];

const initialGreet = 'Ready to connect?';
const thankYouGreet = 'Thank You.';

const ModernContactForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [greetText, setGreetText] = useState(initialGreet);

  // Refs for GSAP
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const greetRef = useRef<HTMLHeadingElement>(null);

  // Animate background shapes
  useEffect(() => {
    if (leftRef.current && rightRef.current && centerRef.current) {
      gsap.to(leftRef.current, {
        y: 30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(rightRef.current, {
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to(centerRef.current, {
        y: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  // Animate greet text in on mount
  useEffect(() => {
    if (greetRef.current) {
      gsap.fromTo(
        greetRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
      );
    }
  }, []);

  // Animate greet text change
  useEffect(() => {
    if (!greetRef.current) return;
    gsap.fromTo(
      greetRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
    );
  }, [greetText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (greetText === thankYouGreet) return; // Prevent further animation if already Thank You.
    // Animate out, then change text, then animate in
    if (greetRef.current) {
      gsap.to(greetRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.95,
        duration: 0.5,
        ease: 'power3.in',
        onComplete: () => {
          setGreetText(thankYouGreet);
        },
      });
    }
    setSubmitted(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgLeft} ref={leftRef}></div>
      <div className={styles.bgRight} ref={rightRef}></div>
      <div className={styles.bgCenter} ref={centerRef}></div>
      <div className={styles.cardRow}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Get in touch</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>Full Name
              <input
                className={styles.input}
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </label>
            <label className={styles.label}>Phone Number
              <input
                className={styles.input}
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </label>
            <label className={styles.label}>Email
              <input
                className={styles.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </label>
            <label className={styles.label}>State
              <select
                className={styles.input}
                name="state"
                value={form.state}
                onChange={handleChange}
                required
              >
                <option value="">Select your state</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </label>
            <label className={styles.label}>Choose Your Required Service
              <select
                className={styles.input}
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </label>
            <label className={styles.label}>Message
              <textarea
                className={styles.input}
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={2}
                placeholder="Your message"
              />
            </label>
            <div className={styles.buttonRow}>
              <button className={styles.sendBtn} type="submit" disabled={greetText === thankYouGreet}>
                <span>SEND</span>
                <span className={styles.sendCircle}><FaPaperPlane /></span>
              </button>
            </div>
          </form>
        </div>
        <div className={styles.thankCard}>
          <div className={styles.thankContent}>
            <h1 className={styles.thankTitle} ref={greetRef}>{greetText}</h1>
            <hr className={styles.hr} />
            <div className={styles.thankSub}>We'll be in touch.<br />Shortly!</div>
            <div className={styles.nextRow}>
              <button className={styles.nextBtn}>
                <span>NEXT</span>
                <span className={styles.nextCircle}><FaArrowRight /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernContactForm;