const ImpactSection = () => {
  return (
    <section className="bg-[#761610] text-white px-4 md:px-16 py-16" id="impact">
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
            90%
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Learner Satisfaction Rate
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-2xl shadow-lg">
          <p className="text-5xl md:text-6xl font-bold mb-3 text-[#761610]">
            4
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Continents Global Learner Base
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-2xl shadow-lg">
          <p className="text-5xl md:text-6xl font-bold mb-3 text-[#761610]">
            88%
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Program Reach in Remote Regions
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-2xl shadow-lg">
          <p className="text-5xl md:text-6xl font-bold mb-3 text-[#761610]">
            69.48%
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Working Professionals Enrolled
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-2xl shadow-lg">
          <p className="text-5xl md:text-6xl font-bold mb-3 text-[#761610]">
            400
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
