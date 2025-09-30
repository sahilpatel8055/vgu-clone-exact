const AdmissionProcessSection = () => {
  return (
    <section className="bg-[#fff7f7] py-8 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <div className="custom-heading-text text-black md:ml-18 leading-snug text-center md:text-start md:mb-4 mb-6 mt-16">
          <h2 className="custom-heading-text mb-6">
            <span className="custom-text-gradient">Admission</span> Process
          </h2>
          You've Come Scrolling This Far—why Stop Now? <br />
          Share Your Details And Apply Now!
        </div>
        <div>
          <img
            alt="Admission process steps illustration"
            className="w-full max-w-8xl mx-auto h-auto object-contain"
            src="/admission-ChJgitmS.webp"
          />
        </div>
        <button className="custom-btn-bg text-white font-bold px-6 py-3 rounded-md shadow-lg cursor-pointer font-poppins mt-4">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default AdmissionProcessSection;
