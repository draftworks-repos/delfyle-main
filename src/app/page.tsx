"use client";

import Hero from "./Components/Hero";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import ContactUs from "./Components/ContactUs/ContactUs";
import CompanyLogos from "./Components/CompanyLogos/CompanyLogos";
import TrustDelfyle from "./Components/TrustDelfyle/TrustDelfyle";
import WhoWeWorkWith from "./Components/WhoWeWorkWith/WhoWeWorkWith";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
import ModernContactForm from "./Components/NewContactForm/ModernContactForm";
import StickyFeatureReveal from "./Components/StickyFeatureReveal/StickyFeatureReveal";
import { 
  ModernNavbar, 
  ModernNavBody, 
  ModernNavItems, 
  ModernNavbarLogo, 
  ModernNavbarButton,
  ModernMobileNav,
  ModernMobileNavHeader,
  ModernMobileNavMenu,
  ModernMobileNavToggle
} from "./Components/ui/modern-navbar";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import BigLogoMarquee from "./Components/BigLogoMarquee/BigLogoMarquee";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const smootherRef = useRef<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // Only create one smoother instance
    if (!smootherRef.current) {
      smootherRef.current = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        normalizeScroll: true,
        wrapper: "main",
        content: "#smooth-content",
      });
    }
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  const navItems = [
    { name: "Startup", link: "#startup" },
    { name: "Trademark", link: "#trademark" },
    { name: "Registration", link: "#registration" },
    { name: "Goods & Services Tax", link: "#gst" },
    { name: "MCA", link: "#mca" },
    { name: "Compliance", link: "#compliance" },
    { name: "Income Tax", link: "#income-tax" },
    { name: "About Us", link: "/about" }
  ];

  return (
    <main className="min-h-screen">
      <div className="fixed inset-x-0 top-0 z-50">
        <ModernNavbar>
          <ModernNavBody>
            <ModernNavbarLogo />
            <ModernNavItems items={navItems} />
            <ModernNavbarButton href="#signin">Signin</ModernNavbarButton>
          </ModernNavBody>

          <ModernMobileNav>
            <ModernMobileNavHeader>
              <ModernNavbarLogo />
              <ModernMobileNavToggle 
                isOpen={isMobileMenuOpen} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              />
            </ModernMobileNavHeader>
            <ModernMobileNavMenu 
              isOpen={isMobileMenuOpen} 
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, index) => (
                <div key={index} className="w-full">
                  <a
                    href={item.link}
                    className="block w-full py-2 text-neutral-600 dark:text-neutral-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
              <ModernNavbarButton href="#signin" className="w-full mt-4">
                Signin
              </ModernNavbarButton>
            </ModernMobileNavMenu>
          </ModernMobileNav>
        </ModernNavbar>
      </div>
      <div id="smooth-content">
        <Hero />
        <BigLogoMarquee logos={[
          "/CompanyLogos/1.png", "/CompanyLogos/2.png", "/CompanyLogos/3.png", "/CompanyLogos/4.png", "/CompanyLogos/5.png", "/CompanyLogos/6.png", "/CompanyLogos/7.png", "/CompanyLogos/8.png", "/CompanyLogos/9.png", "/CompanyLogos/10.png", "/CompanyLogos/11.png", "/CompanyLogos/12.png", "/CompanyLogos/13.png", "/CompanyLogos/14.png", "/CompanyLogos/15.png", "/CompanyLogos/16.png", "/CompanyLogos/17.png", "/CompanyLogos/18.png", "/CompanyLogos/19.png", "/CompanyLogos/20.png", "/CompanyLogos/21.png", "/CompanyLogos/22.png", "/CompanyLogos/23.png", "/CompanyLogos/24.png", "/CompanyLogos/25.png", "/CompanyLogos/26.png", "/CompanyLogos/27.png", "/CompanyLogos/28.png", "/CompanyLogos/29.png", "/CompanyLogos/30.png"
        ]} speed="70s" direction="left" />
        <div className="bg-white">
          <WhatWeDo />
          <FeaturesSection />
          <ModernContactForm/>
          <StickyFeatureReveal />
          <WhoWeWorkWith />
          <CompanyLogos />
          <Testimonial />
          <Footer />
        </div>
      </div>
    </main>
  );
}
