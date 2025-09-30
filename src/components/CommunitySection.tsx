const CommunitySection = () => {
  return (
    <section className="bg-[#fff7f7] w-full py-12 px-4 flex" id="achievement">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-25">
        <div className="w-full max-w-md">
          <img
            alt="Achievers"
            className="w-full h-auto object-contain"
            src="/achievement-BeC0pfd.webp"
          />
        </div>
        <div className="max-w-md text-center md:text-left">
          <h2 className="custom-heading-text mb-4">
            Know Your Online <br /> VGU Community
          </h2>
          <p className="custom-subheading-text mb-4">
            We are rooting for all those who dare to{" "}
            <span className="font-bold">
              <br /> dream big!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
