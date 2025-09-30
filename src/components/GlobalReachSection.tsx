import { useState } from "react";
import CounselingFormDialog from "./CounselingFormDialog";

const GlobalReachSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="w-full">
      <section 
        className="relative w-full bg-no-repeat bg-center bg-cover"
        style={{ 
          backgroundImage: 'url("/worldmap-CEe_zT48.webp")',
          backgroundSize: '100% 100%'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 lg:py-28">
          <div className="w-full md:w-1/2 text-white space-y-6">
            <h2 className="custom-heading-text text-white">
              Get Your Hands On <br />
              The Same VGU Education<br />
              Trusted Globally Across <br />
              4 Continents
            </h2>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="custom-btn-bg text-white font-bold px-6 py-3 rounded-md shadow-lg cursor-pointer font-poppins"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
      <CounselingFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
};

export default GlobalReachSection;
