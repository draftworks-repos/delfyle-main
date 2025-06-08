import React from "react";
import Navbar from "../Navbar/Navbar";
import TitleBlend from "../TitleBlend/TitleBlend";
import Contents from "../Contents/Contents";
import Background from "../Background/Background";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-20">
          <TitleBlend />
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default Hero;
 