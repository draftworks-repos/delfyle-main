import Hero from "./Components/Hero";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import ContactUs from "./Components/ContactUs/ContactUs";
import Testimonial from "./Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white">
        <WhatWeDo />
        <ContactUs />
        <Testimonial />
      </div>
    </main>
  );
}
