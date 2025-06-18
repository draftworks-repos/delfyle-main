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

export default function Home() {
  return (
    <main className="min-h-screen">
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
      </div>
    </main>
  );
}
