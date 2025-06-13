"use client";

import React, { useEffect } from "react";
import DemoHero from "../Components/DemoHero/DemoHero";
import VisionMission from "../Components/VisionMission/VisionMission";
import Footer from "../Components/Footer/Footer";
import CoreMinds from "../Components/CoreMinds/CoreMinds";
import TeamMembers from "../Components/TeamMembers/TeamMembers";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import SocialLinks from "../Components/SocialLinks/SocialLinks";
import IntegrationCards from "../Components/IntegrationCards/IntegrationCards";

const AboutPage = () => {
  useEffect(() => {
    // Check if this is a client-side navigation
    if (window.performance && window.performance.navigation.type === 1) {
      // This is a page refresh, don't reload
      return;
    }
    
    // Force reload the page
    window.location.reload();
  }, []);

  return (
    <main>
      <DemoHero />
      <VisionMission />
      <IntegrationCards />
      <TeamMembers />
      <CoreMinds />
      <SocialLinks />
      <SocialMedia />
      <Footer />
    </main>
  );
};

export default AboutPage;
