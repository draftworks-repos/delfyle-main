"use client";

import { 
  Navbar, 
  NavBody, 
  NavItems, 
  NavbarLogo, 
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle
} from "@/app/Components/ui/resizable-navbar";
import { StickyScroll } from "@/app/Components/ui/sticky-scroll-reveal";
import { useState } from "react";
import Hero from "../Components/Hero";
import WhatWeDo from "../Components/WhatWeDo/WhatWeDo";
import ContactUs from "../Components/ContactUs/ContactUs";
import CompanyLogos from "../Components/CompanyLogos/CompanyLogos";
import TrustDelfyle from "../Components/TrustDelfyle/TrustDelfyle";
import WhoWeWorkWith from "../Components/WhoWeWorkWith/WhoWeWorkWith";
import FeaturedServices from "../Components/FeaturedServices/FeaturedServices";
import Testimonial from "../Components/Testimonial/Testimonial";
import Footer from "../Components/Footer/Footer";
import DragCards from "../Components/DragCards/DragCards";
import HorizontalScrollCarousel from "../Components/HorizontalScrollCarousel/HorizontalScrollCarousel";
import LogoOrigami from "../Components/LogoOrigami.tsx/LogoOrigami";
import VerticleAccordion from "../Components/VerticleAccordion/VerticleAccordion";
import HoverTiltCard from "../Components/HoverTiltCard/HoverTiltCard";
import ScrollCarousel from "../Components/ScrollCarousel/ScrollCarousel";
import { TextParallaxContentExample } from "../Components/TextParallax/TextParallaxContentExample";
import { ShiftingDropDown } from "../Components/DropdownMenu/DropdownMenu";
import StripeNavigation from "../Components/StripeNavigation/StripeNavigation";
import MegaMenu from "../Components/MegaMenu/Megamenu";
import StickyFeatureReveal from "../Components/StickyFeatureReveal/StickyFeatureReveal";
import ContactForm from "../Components/NewContactForm/ContactForm";
import ModernContactForm from '../Components/NewContactForm/ModernContactForm';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      name: "Products", 
      link: "#products",
      dropdown: {
        title: "Our Products",
        items: Array.from({ length: 36 }, (_, i) => ({
          name: `Product ${i + 1}`,
          description: `Description for product ${i + 1}`,
          link: `#product-${i + 1}`
        }))
      }
    },
    { 
      name: "Solutions", 
      link: "#solutions",
      dropdown: {
        title: "Solutions",
        items: Array.from({ length: 9 }, (_, i) => ({
          name: `Solution ${i + 1}`,
          description: `Description for solution ${i + 1}`,
          link: `#solution-${i + 1}`
        }))
      }
    },
    { 
      name: "Resources", 
      link: "#resources",
      dropdown: {
        title: "Resources",
        items: Array.from({ length: 100 }, (_, i) => ({
          name: `Resource ${i + 1}`,
          description: `Description for resource ${i + 1}`,
          link: `#resource-${i + 1}`
        }))
      }
    },
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" }
  ];

  const stickyContent = [
    {
      title: "Real-time Analytics",
      description: "Get instant insights into your business performance with our real-time analytics dashboard. Track key metrics and make data-driven decisions.",
      content: (
        <div className="h-full w-full bg-white p-4">
          <div className="h-full w-full rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-4">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-2">
                <div className="h-2 w-24 rounded-full bg-white/20" />
                <div className="h-2 w-32 rounded-full bg-white/20" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-20 rounded-full bg-white/20" />
                <div className="h-2 w-28 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and streamline your workflow with our intelligent automation tools. Save time and reduce errors.",
      content: (
        <div className="h-full w-full bg-white p-4">
          <div className="h-full w-full rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 p-4">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-2">
                <div className="h-2 w-24 rounded-full bg-white/20" />
                <div className="h-2 w-32 rounded-full bg-white/20" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-20 rounded-full bg-white/20" />
                <div className="h-2 w-28 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Advanced Security",
      description: "Protect your data with enterprise-grade security features. Our platform ensures your information stays safe and compliant.",
      content: (
        <div className="h-full w-full bg-white p-4">
          <div className="h-full w-full rounded-lg bg-gradient-to-br from-green-500 to-teal-500 p-4">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-2">
                <div className="h-2 w-24 rounded-full bg-white/20" />
                <div className="h-2 w-32 rounded-full bg-white/20" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-20 rounded-full bg-white/20" />
                <div className="h-2 w-28 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="fixed inset-x-0 top-0 z-50">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton href="#contact">Get Started</NavbarButton>
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle 
                isOpen={isMobileMenuOpen} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              />
            </MobileNavHeader>
            <MobileNavMenu 
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
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                      {item.dropdown.items.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.link}
                          className="block py-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <NavbarButton href="#contact" className="w-full mt-4">
                Get Started
              </NavbarButton>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      <ModernContactForm />
      <ContactForm/>

      <div className="mt-20">
        <StickyScroll content={stickyContent} />
      </div>

      <WhoWeWorkWith />
      <CompanyLogos />
      <StickyFeatureReveal/>
      <Testimonial />
      {/* <FeaturedServices /> */}
      {/* <Footer /> */}
    </main>
  );
}
