"use client";

import Hero from "../Components/Hero";
import WhatWeDo from "../Components/WhatWeDo/WhatWeDo";
import CompanyLogos from "../Components/CompanyLogos/CompanyLogos";
import WhoWeWorkWith from "../Components/WhoWeWorkWith/WhoWeWorkWith";
import FeaturedServices from "../Components/FeaturedServices/FeaturedServices";
import Testimonial from "../Components/Testimonial/Testimonial";
import Footer from "../Components/Footer/Footer";
import FeaturesSection from '../Components/FeaturesSection/FeaturesSection';
import ModernContactForm from "../Components/NewContactForm/ModernContactForm";
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
} from "../Components/ui/modern-navbar";
import { useState } from "react";
// Extra components
import Button from "../Components/Button/Button";
import ClientReviews from "../Components/ClientReviews/ClientReviews";
import CoreMinds from "../Components/CoreMinds/CoreMinds";
import DemoHero from "../Components/DemoHero/DemoHero";
import DragCards from "../Components/DragCards/DragCards";
import HorizontalScrollCarousel from "../Components/HorizontalScrollCarousel/HorizontalScrollCarousel";
import HoverTiltCard from "../Components/HoverTiltCard/HoverTiltCard";
import IntegrationCards from "../Components/IntegrationCards/IntegrationCards";
import IntegrationTabs from "../Components/IntegrationTabs/IntegrationTabs";
import LogoLines from "../Components/LogoLines/LogoLines";
import LogoOrigami from "../Components/LogoOrigami.tsx/LogoOrigami";
import Marquee from "../Components/Marquee/Marquee";
import ScrollCarousel from "../Components/ScrollCarousel/ScrollCarousel";
import SocialLinks from "../Components/SocialLinks/SocialLinks";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import StickyFeatureReveal from "../Components/StickyFeatureReveal/StickyFeatureReveal";
import StickyScroll from "../Components/StickyScroll/StickyScroll";
import TeamMembers from "../Components/TeamMembers/TeamMembers";
import TestimonialCards from "../Components/TestimonialCards/TestimonialCards";
import VerticleAccordion from "../Components/VerticleAccordion/VerticleAccordion";
import VisionMission from "../Components/VisionMission/VisionMission";
import { TextParallaxContentExample } from "../Components/TextParallax/TextParallaxContentExample";
// Trial Components
import ComponentOne from "../Components/TrialComponent/ComponentOne/ComponentOne";
import ComponentTwo from "../Components/TrialComponent/ComponentTwo/ComponentTwo";
import ComponentFour from "../Components/TrialComponent/ComponentFour/ComponentFour";
import ComponentFive from "../Components/TrialComponent/ComponentFive/ComponentFive";
import ComponentSix from "../Components/TrialComponent/ComponentSix/ComponentSix";
import ComponentSeven from "../Components/TrialComponent/ComponentSeven/ComponentSeven";
import ComponentEight from "../Components/TrialComponent/ComponentEight/ComponentEight";
import ComponentNine from "../Components/TrialComponent/ComponentNine/ComponentNine";
import ComponentTen from "../Components/TrialComponent/ComponentTen/ComponentTen";
import ComponentEleven from "../Components/TrialComponent/ComponentEleven/ComponentEleven";
import ComponentTwelve from "../Components/TrialComponent/ComponentTwelve/ComponentTwelve";
import ComponentThirteen from "../Components/TrialComponent/ComponentThirteen/ComponentThirteen";
import ComponentFourteen from "../Components/TrialComponent/ComponentFourteen/ComponentFourteen";
import ComponentFifteen from "../Components/TrialComponent/ComponentFifteen/ComponentFifteen";
import ComponentSixteen from "../Components/TrialComponent/ComponentSixteen/ComponentSixteen";
import ComponentSeventeen from "../Components/TrialComponent/ComponentSeventeen/ComponentSeventeen";

const AllComponent: React.FC = () => {
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
        <WhoWeWorkWith />
        <CompanyLogos />
        <Testimonial />
        <FeaturedServices />
        <FeaturesSection />
        <Footer />
        {/* Extra components below */}
        <hr />
        <h2>Extra Components</h2>
        <Button text="Sample Button" type="whiteButtonNoBackground" />
        <ClientReviews />
        <CoreMinds />
        <DemoHero />
        <DragCards />
        <HorizontalScrollCarousel />
        <HoverTiltCard />
        <IntegrationCards />
        <IntegrationTabs />
        <LogoLines />
        <LogoOrigami />
        <Marquee text="Sample Marquee Text" />
        <ScrollCarousel />
        <SocialLinks />
        <SocialMedia />
        <StickyFeatureReveal />
        <StickyScroll />
        <TeamMembers />
        <TestimonialCards />
        <VerticleAccordion />
        <VisionMission />
        <TextParallaxContentExample />
        <ComponentOne />
        <ComponentTwo />
        <ComponentFour />
        <ComponentFive />
        <ComponentSix />
        <ComponentSeven />
        <ComponentEight />
        <ComponentNine />
        <ComponentTen />
        <ComponentEleven />
        <ComponentTwelve />
        <ComponentThirteen />
        <ComponentFourteen />
        <ComponentFifteen />
        <ComponentSixteen />
        <ComponentSeventeen />
      </div>
    </main>
  );
};

export default AllComponent; 