import React from "react";
import StartupHero from "../Components/Services/Startup/StartupHero";
import Marquee from "../Components/Marquee/Marquee";
import LogoMarquee from "../Components/LogoMarquee/LogoMarquee";
import ComponentOne from "../Components/Examples/ComponentOne/ComponentOne";
import ComponentTwo from "../Components/Examples/ComponentTwo/ComponentTwo";
import ComponentThird from "../Components/Examples/ComponentThird/ComponentThird";
import ComponentFour from "../Components/Examples/ComponentFour/ComponentFour";
import ComponentFive from "../Components/Examples/ComponentFour/ComponentFive";
import ComponentSix from "../Components/Examples/ComponentFive/ComponentSix";
import ComponentSeven from "../Components/Examples/ComponentSeven/ComponentSeven";
import ComponentEight from "../Components/Examples/ComponentEight/ComponentEight";
import ComponentNine from "../Components/Examples/ComponentNine/ComponentNine";

const StartupPage = () => {
  const companyLogos = [
    "/company-logos/1.png",
    "/company-logos/2.png",
    "/company-logos/3.png",
    "/company-logos/4.png",
    "/company-logos/5.png",
    "/company-logos/6.png",
    "/company-logos/7.png",
    "/company-logos/8.png",
    "/company-logos/9.png",
    "/company-logos/10.png",
    "/company-logos/11.png",
    "/company-logos/12.png",
    "/company-logos/13.png",
    "/company-logos/14.png",
    "/company-logos/15.png",
    "/company-logos/16.png",
    "/company-logos/17.png",
    "/company-logos/18.png",
    "/company-logos/19.png",
    "/company-logos/20.png",
    "/company-logos/21.png",
    "/company-logos/22.png",
    "/company-logos/23.png",
    "/company-logos/24.png",
    "/company-logos/25.png",
    "/company-logos/26.png",
    "/company-logos/27.png",
    "/company-logos/28.png",
    "/company-logos/29.png",
    "/company-logos/30.png",
  ];

  return (
    <main>
      <StartupHero />
      <Marquee text="YOUR BUSINESS, HASSLE-FREE. PARTNERS FOR STARTUPS. FINANCIAL FREEDOM. COMPLIANCE MADE EASY. INVEST IN YOUR FUTURE. " speed={30} direction="left" />
      <LogoMarquee logos={companyLogos} speed="14s" direction="left" />
      <ComponentOne />
      <ComponentTwo />
      <ComponentThird />
      <ComponentFour />
      <ComponentFive />
      <ComponentSix />
      <ComponentSeven />
      <ComponentEight />
      <ComponentNine />
    </main>
  );
};

export default StartupPage;
