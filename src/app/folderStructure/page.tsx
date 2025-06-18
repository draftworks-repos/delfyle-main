import React from "react";

const folderStructure = `src
└─ app
   ├─ AllComponent
   │   └─ page.tsx
   ├─ Components
   │   ├─ About
   │   ├─ AboutNavbar
   │   ├─ Background
   │   ├─ BigLogoMarquee
   │   ├─ Button
   │   ├─ ClientReviews
   │   ├─ CompanyLogos
   │   ├─ ContactUs
   │   ├─ Contents
   │   ├─ CoreMinds
   │   ├─ CustomNavbar
   │   ├─ DemoHero
   │   ├─ DragCards
   │   ├─ DropdownMenu
   │   ├─ FeaturedServices
   │   ├─ FeaturesSection
   │   ├─ Footer
   │   ├─ Hero
   │   ├─ HorizontalScrollCarousel
   │   ├─ HoverTiltCard
   │   ├─ IntegrationCards
   │   ├─ IntegrationTabs
   │   ├─ LogoLines
   │   ├─ LogoMarquee
   │   ├─ LogoOrigami.tsx
   │   ├─ Marquee
   │   ├─ Navbar
   │   ├─ NewContactForm
   │   ├─ ScrollCarousel
   │   ├─ SocialLinks
   │   ├─ SocialMedia
   │   ├─ StickyFeatureReveal
   │   ├─ StickyScroll
   │   ├─ StripeNavigation
   │   ├─ TeamMembers
   │   ├─ Testimonial
   │   ├─ TestimonialCards
   │   ├─ Testimonials
   │   ├─ TextParallax
   │   ├─ TitleBlend
   │   ├─ TrialComponent
   │   ├─ TrustDelfyle
   │   ├─ ui
   │   ├─ VerticleAccordion
   │   ├─ VerticleAccordian
   │   ├─ VisionMission
   │   ├─ WhatWeDo
   │   ├─ WhoWeWorkWith
   │   └─ SmoothScrollInit.tsx
   ├─ Home
   ├─ Services
   │   ├─ Compliance
   │   ├─ Goods & Services Tax
   │   ├─ Income Tax
   │   ├─ MCA
   │   ├─ Registrations
   │   ├─ Startup
   │   │   ├─ page.tsx
   │   │   ├─ StartupHero.module.css
   │   │   ├─ StartupHero.tsx
   │   │   ├─ LLP.module.css
   │   │   ├─ LLP.tsx
   │   │   ├─ Limited Liability Partnership (LLP)
   │   │   ├─ Nidhi Company
   │   │   ├─ One Person Company (OPC)
   │   │   ├─ Partnership Firm
   │   │   ├─ Private Limited Company
   │   │   ├─ Producer Company
   │   │   ├─ Public Company
   │   │   ├─ Section 8 Company
   │   │   └─ Trust Registration
   │   └─ Trademark
   │       ├─ page.tsx
   │       ├─ TrademarkHero.module.css
   │       ├─ TrademarkHero.tsx
   │       ├─ Copyright Objections
   │       ├─ Copyright Registration
   │       ├─ Design Objection
   │       ├─ Design Registration
   │       ├─ Expedited Trademark Registration
   │       ├─ Logo Design + Trademark Protection
   │       ├─ Trademark Certificate
   │       ├─ Trademark Hearing
   │       ├─ Trademark Infringement Notice
   │       ├─ Trademark Objection
   │       ├─ Trademark Opposition
   │       ├─ Trademark Rectification
   │       ├─ Trademark Registration
   │       ├─ Trademark Renewal
   │       ├─ Trademark Restoration
   │       ├─ Trademark Transfer
   │       └─ ...
   ├─ about
   │   └─ page.tsx
   ├─ folderStructure
   │   └─ page.tsx
   ├─ trial
   │   ├─ page.tsx
   │   └─ trial.module.css
   ├─ favicon.ico
   ├─ globals.css
   ├─ layout.tsx
   ├─ page.module.css
   └─ page.tsx`;

export default function FolderStructurePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Project Folder Structure</h1>
      <pre style={{ background: '#222', color: '#fff', padding: '1.5rem', borderRadius: '8px', fontSize: '1.1rem', overflowX: 'auto' }}>
        {folderStructure}
      </pre>
    </main>
  );
} 