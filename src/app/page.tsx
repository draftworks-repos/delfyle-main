"use client";

import Hero from "./Components/Hero";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import ContactUs from "./Components/ContactUs/ContactUs";
import CompanyLogos from "./Components/CompanyLogos/CompanyLogos";
import TrustDelfyle from "./Components/TrustDelfyle/TrustDelfyle";
import WhoWeWorkWith from "./Components/WhoWeWorkWith/WhoWeWorkWith";
import FeaturedServices from "./Components/FeaturedServices/FeaturedServices";
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
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

      <Hero />
      <div className="bg-white">
        <WhatWeDo />
        <ModernContactForm/>
        <StickyFeatureReveal />
        <WhoWeWorkWith />
        <CompanyLogos />
        <Testimonial />
        <FeaturedServices />
        <FeaturesSection />
        <Footer />
      </div>
    </main>
  );
}
