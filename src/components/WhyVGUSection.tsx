interface Feature {
  icon: string;
  title: string;
  description: string;
  alt: string;
}

const features: Feature[] = [
  {
    icon: "/ugc-BY2VWXZ.png",
    title: "UGC-ENTITLED",
    description: "Your Degree Is Recognized Globally And By All Major Recruiters.",
    alt: "UGC Entitled Degree",
  },
  {
    icon: "/flexiblelearning-DueQMTAL.png",
    title: "FLEXIBLE LEARNING",
    description: "Study at your own pace, anytime, anywhere.",
    alt: "Flexible Learning",
  },
  {
    icon: "/industryoriented-Cx_NhYHV.png",
    title: "INDUSTRY-ORIENTED PROGRAMS",
    description: "Vast Elective Pool in each program such as Digital Marketing, FinTech, AI, Data",
    alt: "Industry-Oriented Programs",
  },
  {
    icon: "/expertmentor-CZ-SKrjV.png",
    title: "EXPERT MENTORSHIP",
    description: "Learn from PhDs, domain experts, and industry veterans",
    alt: "Expert Mentorship",
  },
  {
    icon: "/affordablestructure-C8k2lNZ0.png",
    title: "AFFORDABLE FEE STRUCTURE",
    description: "Flexible, No Cost EMI options and high ROI",
    alt: "Affordable Fee Structure",
  },
  {
    icon: "/examination-Bro4PhOt.png",
    title: "EXAMINATION ON DEMAND",
    description: "Take assessments and exams at your ease",
    alt: "Examination on Demand",
  },
  {
    icon: "/dualdegree-BfUTg2mC.png",
    title: "DUAL DEGREE OPPORTUNITY",
    description: "Pursue two degrees simultaneously one on-campus and one online of same level",
    alt: "Dual Degree Opportunity",
  },
  {
    icon: "/global-BMiNUPRX.png",
    title: "GLOBAL ACCESSIBILITY & ACCEPTANCE",
    description: "Programs Are Available To Study Globally.",
    alt: "Global Accessibility & Acceptance",
  },
  {
    icon: "/careerassistance-O1l9zAvf.png",
    title: "CAREER ASSISTANCE",
    description: "Career Guidance with Experts, Free Resume Reviews, LinkedIn Profile Makeovers and more.",
    alt: "Career Assistance",
  },
  {
    icon: "/industrybasedmicro-CkULM7Rr.png",
    title: "INDUSTRY BASED MICRO CREDENTIALS",
    description: "In collaboration with renowned industry partners",
    alt: "Industry Based Micro Credentials",
  },
];

const WhyVGUSection = () => {
  return (
    <section className="mx-auto px-6 py-16 bg-[#fff7f7] w-full">
      <div className="text-center mb-8 max-w-7xl mx-auto">
        <h2 className="custom-heading-text tracking-wide">
          What Makes Online VGU the <span className="custom-text-gradient">Right Choice?</span>
        </h2>
        <div className="flex justify-center">
          <hr className="md:w-1/2 w-full h-[3px] bg-[#7F1813] border-0 rounded mt-2" />
        </div>
        <p className="custom-subheading-text">
          We provide learning that adapts to <b>YOU</b>
        </p>
      </div>

      <div className="p-8 shadow-xl rounded-3xl bg-white max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                alt={feature.alt}
                className="w-12 h-12 mb-3"
                loading="lazy"
                src={feature.icon}
              />
              <h2 className="text-lg font-bold custom-text-gradient">{feature.title}</h2>
              <p className="text-sm text-gray-600 font-poppins">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVGUSection;
