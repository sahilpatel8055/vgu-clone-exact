const AboutSection = () => {
  return (
    <section className="px-6 py-10 md:py-16 lg:py-20 bg-white" id="who-we-are">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            alt="Vivekananda Global University Campus"
            className="w-full h-auto max-h-[500px] object-cover md:max-h-[600px] lg:max-h-[700px]"
            src="/whoweare-DxdwyeV8.webp"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="custom-heading-text">
            <span className="custom-text-gradient">Who</span> We Are
          </h2>
          <div className="flex justify-center md:justify-start">
            <hr className="w-1/2 h-[3px] bg-[#7F1813] border-0 rounded mt-1" />
          </div>
          <p className="custom-subheading-text">Your Gateway to Future-Ready Learning!</p>
          <p className="mt-4 leading-relaxed text-justify">
            Online VGU is a <strong>digital initiative of NAAC A+ accredited</strong> Vivekananda Global University, Jaipur offering <strong>UGC-Entitled</strong> online degree programs empowering over thousands of learners through <strong>globally trusted VGU education</strong> with greater <strong>flexibility, affordability and accessibility.</strong>
          </p>
          <p className="mt-2 leading-relaxed text-justify">
            Our degrees are globally recognized and hold the same value as regular on-campus programs. Whether you're upskilling, reskilling, or starting fresh, our <strong>learner-centric approach</strong> ensures you gain the knowledge, credentials, and confidence to succeed — anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;