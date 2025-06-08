import React, { useState, useEffect } from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "",
    service: "",
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      quote:
        "This year, based on a friend's recommendation, I outsourced my tax filing for the first time, and I had a very pleasant experience with Delfyle Solutions. I was particularly impressed by Sonam's professionalism in handling my income tax filing. I will definitely engage them again in the future.",
      name: "Samar Dolui",
      designation: "5 Star Google Review",
    },
    {
      quote:
        "I had gotten in touch with them through a friend. Adwitiya was extremely helpful and prompt with all of my queries. They provided legal advice in a way which was easy to understand for a layman like me. All love and wishes to them. Would definitely recommend further.",
      name: "Angana Roy",
      designation: "5 Star Google Review",
    },
    {
      quote:
        "Delfyle Solutions Private limited is one Platform to Company wonderful Work in A to Z Service.",
      name: "Shyam Gupta",
      designation: "5 Star Google Review",
    },
    {
      quote:
        "I'd like to thank Avinash Ji from the team for his unwavering support throughout, which is very appreciated. They are exceedingly competent in their work, and I suggest them.",
      name: "A.S. Tours & Travels",
      designation: "5 Star Google Review",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting contact form:", formData);
    // Add your form submission logic here
  };

  // Define states and services arrays for the dropdowns
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const services = [
    "Legal Services",
    "Compliance Management",
    "Regulatory Advisory",
    "Corporate Law",
    "Tax Advisory",
    "Business Registration",
    "Trademark & IP",
    "Documentation Services",
  ];

  return (
    <section className={styles.contactUsSection}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            {/* Replace with your actual logo */}
            <img src="/vercel.svg" alt="company Logo" />
          </div>
          <h2 className={styles.title}>Get Started with Delfyle!</h2>
          <p className={styles.subtitle}>
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          {/* Testimonial */}
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p
                className={`${styles.testimonialQuote} ${
                  !isTransitioning ? styles.active : ""
                }`}
              >
                {testimonials[activeTestimonial].quote}
              </p>
              <p
                className={`${styles.testimonialAuthor} ${
                  !isTransitioning ? styles.active : ""
                }`}
              >
                {testimonials[activeTestimonial].name} <br />{" "}
                {testimonials[activeTestimonial].designation}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className={styles.rightSection}>
          {/* Optional: Keep close button if component is used in a modal/popup */}
          {/* <div className={styles.closeButton}>&times;</div> */}
          {/* Removed tabs */}

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Full Name */}
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.label}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={styles.input}
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Phone Number */}
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>

            {/* State Dropdown */}
            <div className={styles.formGroup}>
              <label htmlFor="state" className={styles.label}>
                State
              </label>
              <select
                id="state"
                name="state"
                className={`${styles.input} ${styles.select}`}
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Select your state</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Dropdown */}
            <div className={styles.formGroup}>
              <label htmlFor="service" className={styles.label}>
                Choose Your Required Services
              </label>
              <select
                id="service"
                name="service"
                className={`${styles.input} ${styles.select}`}
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send message
            </button>

            <p className={styles.privacyText}>
              By clicking on "Send message" button, you agree to our{" "}
              <a href="/privacy" className={styles.privacyLink}>
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
