"use client";

import React from "react";
import DemoHero from "../Components/DemoHero/DemoHero";
import VisionMission from "../Components/VisionMission/VisionMission";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const AboutPage = () => {
  return (
    <main>
      <Navbar/>
      <DemoHero />
      <VisionMission />
      <Footer />
    </main>
  );
};

export default AboutPage;
