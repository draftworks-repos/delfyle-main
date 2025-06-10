import Hero from "./Components/Hero";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import ContactUs from "./Components/ContactUs/ContactUs";
import CompanyLogos from "./Components/CompanyLogos/CompanyLogos";
import TrustDelfyle from "./Components/TrustDelfyle/TrustDelfyle";
import WhoWeWorkWith from "./Components/WhoWeWorkWith/WhoWeWorkWith";
import FeaturedServices from "./Components/FeaturedServices/FeaturedServices";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white">
        <WhatWeDo />
        <ContactUs />
        <TrustDelfyle />
        <WhoWeWorkWith />
        <CompanyLogos />
        <Testimonial />
        <FeaturedServices />
        <Footer />
      </div>
    </main>
  );
}
