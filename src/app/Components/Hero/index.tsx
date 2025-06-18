import React from "react";
import TitleBlend from "../TitleBlend/TitleBlend";
import Contents from "../Contents/Contents";
import Background from "../Background/Background";

const Hero: React.FC = () => {
  return (
    <div className="hero-section" style={{ minHeight: '100vh' }}>
      <Background />
      <div style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 1rem', 
          paddingTop: '10rem' 
        }}>
          <TitleBlend />
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default Hero;
 