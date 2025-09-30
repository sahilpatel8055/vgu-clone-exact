const PedagogySection = () => {
  const features = [
    {
      icon: "/aipowered-X70jA0E7.webp",
      title: "AI-Powered AV Lectures",
    },
    {
      icon: "/personalized-BTaam6Qk.webp",
      title: "Personalized Learning Paths",
    },
    {
      icon: "/learntogo-DAwkp61l.webp",
      title: "Learn on the Go",
    },
    {
      icon: "/smartaccess-CxttFsR9.webp",
      title: "Smart Assessments Tools",
    },
    {
      icon: "/collaborative-B2xFOJfD.webp",
      title: "Collaborative Learning Environment",
    },
    {
      icon: "/twentyfour-JjZsdV5E.webp",
      title: "24/7 Support & Resources",
    },
  ];

  return (
    <div className="w-full -mt-2" id="pedagogy">
      <div 
        className="relative w-full bg-cover bg-center text-white py-16 px-4 lg:px-20"
        style={{ backgroundImage: 'url("/learningExperiencebg-CxORopzv.webp")' }}
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="w-full lg:w-3/5">
            <h2 className="custom-heading-text mb-1 tracking-wide text-center">
              Our Pedagogy & Learning Experience
            </h2>
            <div className="flex justify-center md:justify-start">
              <hr className="w-full h-[3px] bg-white border-0 rounded mt-2" />
            </div>
            <p className="custom-subheading-text text-center tracking-wide leading-relaxed">
              Empowering every learner through innovation and support
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white text-black rounded-xl shadow-md p-5 flex flex-col gap-2 items-start transition-transform duration-300 hover:scale-105 hover:bg-[#7F1813] hover:text-white"
                >
                  <div className="text-3xl">
                    <img
                      alt="Icons"
                      className="h-14 ml-1 transition duration-300 group-hover:filter group-hover:invert group-hover:brightness-0"
                      src={feature.icon}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="w-0.5 h-14 bg-black mr-3 rounded transition duration-300 group-hover:bg-white"></div>
                    <p className="font-bold text-md font-poppins transition duration-300">
                      {feature.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-0 right-0 z-0">
          <img
            alt="Girl"
            className="max-h-[580px] object-contain"
            src="/learningExperienceGirl-CiTYBDk.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default PedagogySection;
