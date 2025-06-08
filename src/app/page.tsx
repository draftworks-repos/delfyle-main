import Hero from "./Components/Hero";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import ContactUs from "./Components/ContactUs/ContactUs";
import Testimonial from "./Components/Testimonial/Testimonial";
import StickyScroll from "./Components/StickyScroll/StickyScroll";
import Footer from "./Components/Footer/Footer";
import CompanyLogos from "./Components/CompanyLogos/CompanyLogos";
import TrustDelfyle from "./Components/TrustDelfyle/TrustDelfyle";
import TestimonialCards from "./Components/TestimonialCards/TestimonialCards";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white">
        <WhatWeDo />
        <ContactUs />
        <TrustDelfyle />
        <TestimonialCards />
        <Testimonial />
        <CompanyLogos />
        {/* <StickyScroll /> */}
        <Footer />
      </div>
    </main>
  );
}
