import React from "react";
import StartupHero from "../StartupHero";
import BigLogoMarquee from "../../../Components/BigLogoMarquee/BigLogoMarquee";

const PrivateLimitedCompany: React.FC = () => {
  // Array of company logos from the CompanyLogos directory
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
      
      {/* Big Company Logo Marquee Section */}
      <section style={{ 
        padding: '4rem 0', 
      }}>        
        <BigLogoMarquee 
          logos={companyLogos}
          direction="left"
          speed="100s"
        />
      </section>



    </main>
  );
};

export default PrivateLimitedCompany; 