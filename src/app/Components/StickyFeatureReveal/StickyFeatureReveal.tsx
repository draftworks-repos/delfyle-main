'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: '💡', title: 'Innovation', desc: 'We bring ideas to life.', btn: 'Learn More' },
  { icon: '⚙️', title: 'Engineering', desc: 'Robust scalable systems.', btn: 'Explore' },
  { icon: '🌍', title: 'Global Impact', desc: 'Worldwide difference.', btn: 'See How' },
  { icon: '📈', title: 'Growth', desc: 'Smart strategies.', btn: 'View Insights' },
  { icon: '🔒', title: 'Security', desc: 'Enterprise-grade protection.', btn: 'Secure Now' },
  { icon: '🚀', title: 'Performance', desc: 'Lightning-fast delivery.', btn: 'Boost' },
  { icon: '🤝', title: 'Partnerships', desc: 'Stronger together.', btn: 'Collaborate' },
  { icon: '📊', title: 'Analytics', desc: 'Informed decisions.', btn: 'Analyze' },
];

const StickyFeatureReveal = () => {
  const pinRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the right side
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 270px',
        end: 'bottom 650px',
        pin: pinRef.current,
        pinSpacing: false,
      });

      // Animate left-side blocks
      gsap.utils.toArray('.feature-block').forEach((block: any) => {
        gsap.fromTo(
          block,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.2,
            scrollTrigger: {
              trigger: block,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col lg:flex-row gap-12 px-4 md:px-12 py-32 max-w-7xl mx-auto relative"
    >
      {/* Left: Scrollable Fields */}
      <div className="flex-1 space-y-20">
        {features.map((feature, index) => (
          <div key={index} className="feature-block opacity-0 transform transition duration-500">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  {feature.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Pinned Block (with GSAP) */}
      <div className="w-full lg:w-1/3 h-fit" ref={pinRef}>
        <div className="bg-gray-100 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Pinned Insight</h2>
          <p className="text-gray-700">
            This block stays pinned in the center as you scroll through the fields on the left.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyFeatureReveal;
