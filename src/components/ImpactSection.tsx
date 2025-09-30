const ImpactSection = () => {
  return (
    <section className="bg-[#761610] text-white px-4 md:px-16 py-18" id="impact">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-w-7xl mx-auto">
        <div className="lg:w-1/2">
          <h2 className="custom-heading-text text-white">
            Democratizing Higher Education Through Flexibility, Affordability and Accessibility
          </h2>
        </div>
        <div className="lg:w-1/2 bg-white text-black p-6 rounded-md shadow-md">
          <p className="text-base leading-relaxed font-poppins">
            In line with the University Grants Commission's (UGC) emphasis on expanding online education to reach a broader demographic, Online VGU is democratizing education by making quality learning accessible to every household.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto mt-10">
        <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
          <p className="custom-heading-text mb-2 custom-text-gradient">
            <span>90%</span>
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Learner Satisfaction Rate
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
          <p className="custom-heading-text mb-2 custom-text-gradient">
            <span>4</span>
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Continents Global Learner Base
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
          <p className="custom-heading-text mb-2 custom-text-gradient">
            <span>88%</span>
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Program Reach in Remote Regions
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
          <p className="custom-heading-text mb-2 custom-text-gradient">
            <span>69.48%</span>
          </p>
          <p className="text-sm md:text-base font-medium font-poppins">
            Working Professionals Enrolled
          </p>
        </div>
        
        <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
          <p className="custom-heading-text mb-2 custom-text-gradient">
            <span>400</span>
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
