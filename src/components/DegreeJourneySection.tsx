import { useState } from "react";

const DegreeJourneySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/degreeFront-D96DoZYM.webp", alt: "Degree Front" },
    { src: "/degreeBack-CRXE7rMI.webp", alt: "Degree Back" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative w-full py-12 px-6 lg:px-20 bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/degreeBg-Ck6MSB6s.webp")' }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="custom-heading-text text-white mb-8 leading-tight max-w-xl text-center md:text-start">
            Navigate The Road To Your Dream Degree From Enrollment To Graduation
          </h2>
          <img
            alt="Degree Journey"
            className="w-full max-w-xl md:mr-40 mr-12"
            src="/degreeMap-B9ZEXEni.webp"
          />
          <button className="mt-8 px-5 py-2 bg-white text-[#7F1813] rounded font-semibold w-fit cursor-pointer font-poppins">
            View all Programs
          </button>
        </div>
        <div className="flex-1 bg-white p-4 max-w-lg w-full shadow-2xl relative">
          <div className="relative">
            <img
              alt={slides[currentSlide].alt}
              className="w-full h-auto object-contain"
              src={slides[currentSlide].src}
            />
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegreeJourneySection;
