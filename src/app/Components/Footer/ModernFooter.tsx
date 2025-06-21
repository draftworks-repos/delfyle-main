import React from 'react';
import Image from 'next/image';
import styles from './ModernFooter.module.css';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ModernFooter = () => {
    const footerLinks = {
        product: [
            { name: "What's New", link: "#" },
            { name: "Design", link: "#" },
            { name: "Collaboration", link: "#" },
            { name: "Prototyping", link: "#" },
            { name: "Developer Handoff", link: "#" },
            { name: "All Features", link: "#" },
        ],
        support: [
            { name: "Download and Install", link: "#" },
            { name: "Help Center", link: "#" },
            { name: "Support Community", link: "#" },
            { name: "Enterprise Support", link: "#" },
            { name: "Documentation", link: "#" },
            { name: "Community Forum", link: "#" },
        ],
        resources: [
            { name: "Our Blog", link: "#" },
            { name: "Extensions & Plugins", link: "#" },
            { name: "Pricing", link: "#" },
            { name: "Roadmap", link: "#" },
            { name: "Free for Education", link: "#" },
            { name: "Newsletter", link: "#" },
        ],
        about: [
            { name: "About Us", link: "/about" },
            { name: "Careers", link: "#" },
            { name: "Contact us", link: "#" },
        ],
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                         <Image src="/delfyle-logo/delfyle-logo.png" alt="Delfyle Logo" width={250} height={250} />
                    </div>
                    <h2 className={styles.title}>Ready to get started?</h2>
                    <p className={styles.subtitle}>Contact us today to discuss your needs and find out how we can help you achieve your goals.</p>
                    <a href="/contact" className={styles.ctaButton}>
                        Contact Us <FiArrowRight className={styles.ctaIcon} />
                    </a>
                </div>

                <div className={styles.linksSection}>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// Product</h3>
                        <ul>
                            {footerLinks.product.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// Support</h3>
                        <ul>
                            {footerLinks.support.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// Resources</h3>
                        <ul>
                            {footerLinks.resources.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.linksColumn}>
                        <h3 className={styles.columnTitle}>// About</h3>
                        <ul>
                            {footerLinks.about.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className={styles.divider} />

                <div className={styles.bottomSection}>
                    <div className={styles.newsletter}>
                        <h3 className={styles.newsletterTitle}>Chat with our expert</h3>
                        <p className={styles.newsletterSubtitle}>Have questions? Get in touch with our team for expert guidance on all your compliance and registration needs.</p>
                    </div>
                    <div className={styles.whatsappAction}>
                        <a href="https://wa.me/917439587419" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
                            <FaWhatsapp className={styles.whatsappIcon} />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>


                <div className={styles.legalSection}>
                    <p className={styles.copyright}>©2025 Delfyle, All rights reserved. Designed & Developed by <a href="https://www.linkedin.com/in/tuhel-rana-0000000000000000000000000000000000000000/">WebMaak</a></p>
                    <div className={styles.legalLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter; 