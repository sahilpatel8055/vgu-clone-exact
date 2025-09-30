import { useEffect, useRef, useState } from "react";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const CountUp = ({ end, decimals = 0, suffix = "" }: { end: number; decimals?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 2000; // 2 seconds animation

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeOutQuart * end;
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end]);

    return (
      <>
        {count.toFixed(decimals)}
        {suffix}
      </>
    );
  };

  return (
    <section ref={sectionRef} className="bg-[#761610] text-white px-4 md:px-16 py-16" id="impact">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-w-7xl mx-auto mb-10">
        <div className="lg:w-1/2">
          <h2 className="custom-heading-text text-white">
            Democratizing Higher Education Through Flexibility, Affordability and Accessibility
          </h2>
        </div>
        <div className="lg:w-1/2 bg-white text-black p-8 rounded-2xl shadow-md">
          <p className="text-base leading-relaxed font-poppins">
            In line with the University Grants Commission's (UGC) emphasis on expanding online education to reach a broader demographic, Online VGU is democratizing education by making quality learning accessible to every household.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        <div className="bg-white text-black text-center py-8 px-4 rounded-2xl shadow-lg">
          <p className="text-5xl md:text-6xl font-bold mb-3 text-[#761610]">
            <CountUp end={90} suffix="%" />
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Learner Satisfaction Rate
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-2xl shadow-lg">
          <p className="text-5xl md:text-6xl font-bold mb-3 text-[#761610]">
            <CountUp end={4} />
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Continents Global Learner Base
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-2xl shadow-lg">
          <p className="text-5xl md:text-6xl font-bold mb-3 text-[#761610]">
            <CountUp end={88} suffix="%" />
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Program Reach in Remote Regions
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-2xl shadow-lg">
          <p className="text-5xl md:text-6xl font-bold mb-3 text-[#761610]">
            <CountUp end={69.48} decimals={2} suffix="%" />
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Working Professionals Enrolled
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-2xl shadow-lg">
          <p className="text-5xl md:text-6xl font-bold mb-3 text-[#761610]">
            <CountUp end={400} />
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Years of Combined Faculty Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
