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

const StartupPage = () => {
  const companyLogos = [
    "/company-logos/Microsoft_Logo_1.png",
    "/company-logos/Google_Logo_1.png",
    "/company-logos/Amazon_Logo_1.png",
    "/company-logos/NVIDIA_Logo_1.png",
    "/company-logos/Netflix_Logo_1.png",
    "/company-logos/Sony_Logo_1.png",
    "/company-logos/HP_Logo_1.png",
    "/company-logos/Samsung_idrZcaRCpR_1.png",
    "/company-logos/Meta_idlf4cVSsS_1.png",
    "/company-logos/Disney_iddEtLt1OH_1.png",
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
    </main>
  );
};

export default StartupPage;
