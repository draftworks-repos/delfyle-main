import React from "react";
import StartupHero from "../Components/Services/Startup/StartupHero";
import Marquee from "../Components/Marquee/Marquee";
import LogoMarquee from "../Components/LogoMarquee/LogoMarquee";
import BigLogoMarquee from "../Components/BigLogoMarquee/BigLogoMarquee";
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
    "/CompanyLogos/1.png",
    "/CompanyLogos/2.png",
    "/CompanyLogos/3.png",
    "/CompanyLogos/4.png",
    "/CompanyLogos/5.png",
    "/CompanyLogos/6.png",
    "/CompanyLogos/7.png",
    "/CompanyLogos/8.png",
    "/CompanyLogos/9.png",
    "/CompanyLogos/10.png",
    "/CompanyLogos/11.png",
    "/CompanyLogos/12.png",
    "/CompanyLogos/13.png",
    "/CompanyLogos/14.png",
    "/CompanyLogos/15.png",
    "/CompanyLogos/16.png",
    "/CompanyLogos/17.png",
    "/CompanyLogos/18.png",
    "/CompanyLogos/19.png",
    "/CompanyLogos/20.png",
    "/CompanyLogos/21.png",
    "/CompanyLogos/22.png",
    "/CompanyLogos/23.png",
    "/CompanyLogos/24.png",
    "/CompanyLogos/25.png",
    "/CompanyLogos/26.png",
    "/CompanyLogos/27.png",
    "/CompanyLogos/28.png",
    "/CompanyLogos/29.png",
    "/CompanyLogos/30.png",
  ];

  return (
    <main>
      <StartupHero />
      <Marquee text="YOUR BUSINESS, HASSLE-FREE. PARTNERS FOR STARTUPS. FINANCIAL FREEDOM. COMPLIANCE MADE EASY. INVEST IN YOUR FUTURE. " speed={30} direction="left" />
      <LogoMarquee logos={companyLogos} speed="70s" direction="left" />
      <BigLogoMarquee logos={companyLogos} speed="70s" direction="left" />
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
