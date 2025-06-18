'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import {
  IconBuildingStore,
  IconTrademark,
  IconFileInvoice,
  IconReceipt,
  IconBuildingSkyscraper,
  IconClipboardCheck,
  IconCalculator,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Business Registration",
      description: "Start your business journey with our comprehensive registration services including Private Limited, OPC, LLP, and more.",
      icon: <IconBuildingStore className="w-8 h-8" />,
    },
    {
      title: "Trademark & IP",
      description: "Protect your brand and intellectual property with our trademark registration and IP services.",
      icon: <IconTrademark className="w-8 h-8" />,
    },
    {
      title: "GST Registration",
      description: "Get your business GST registered and stay compliant with tax regulations.",
      icon: <IconFileInvoice className="w-8 h-8" />,
    },
    {
      title: "Income Tax",
      description: "Expert assistance with income tax filing, planning, and compliance for individuals and businesses.",
      icon: <IconReceipt className="w-8 h-8" />,
    },
    {
      title: "MCA Services",
      description: "Complete MCA compliance and filing services for your company's legal requirements.",
      icon: <IconBuildingSkyscraper className="w-8 h-8" />,
    },
    {
      title: "Business Compliance",
      description: "Stay compliant with all business regulations and requirements with our expert guidance.",
      icon: <IconClipboardCheck className="w-8 h-8" />,
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning services to optimize your tax liabilities and maximize savings.",
      icon: <IconCalculator className="w-8 h-8" />,
    },
    {
      title: "Business Advisory",
      description: "Expert business advisory services to help you make informed decisions and grow your business.",
      icon: <IconBuildingStore className="w-8 h-8" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive business solutions to help you start, grow, and succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={feature.title} 
              {...feature} 
              index={index} 
              isMiddleCard={index === 1 || index === 2 || index === 5 || index === 6}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  isMiddleCard,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isMiddleCard: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const header = headerRef.current;
    if (!card || !header) return;

    const handleMouseEnter = () => {
      if (isMiddleCard) {
        gsap.to(card, {
          y: -100,
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          duration: 0.2,
          ease: "power1.out"
        });
      } else {
        gsap.to(card, {
          y: -15,
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          duration: 0.2,
          ease: "power1.out"
        });
      }
      // Header lift animation
      gsap.to(header, {
        y: -5,
        duration: 0.2,
        ease: "power1.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: isMiddleCard ? -90 : 0,
        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        duration: 0.2,
        ease: "power1.out"
      });
      // Header return animation
      gsap.to(header, {
        y: 0,
        duration: 0.2,
        ease: "power1.out"
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Initial position for middle cards
    if (isMiddleCard) {
      gsap.set(card, { y: -90 });
    }

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMiddleCard]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300",
        "hover:shadow-2xl"
      )}
    >
      <div ref={headerRef} className="relative z-10">
        <div className="mb-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}; 