import { useState } from "react";
import { Search, Phone } from "lucide-react";

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-[#fff7f7]">
      <section className="w-full py-16 px-4 relative overflow-hidden max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col-reverse lg:flex-row items-center justify-between relative md:ml-24 ml-0">
          <div className="w-full lg:w-1/2">
            <h2 className="custom-heading-text mb-2 text-center">
              Frequently Asked <span className="custom-text-gradient">Questions</span>
            </h2>
            <div className="flex justify-center mb-4">
              <hr className="w-full h-[3px] bg-vgu-red" />
            </div>
            <div className="w-full relative mb-6 font-poppins">
              <input
                placeholder="Search here what are you looking for"
                className="w-full pl-14 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-700 placeholder-gray-400"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-vgu-red border-2 rounded-full w-8 h-8 p-1" />
            </div>
            <div className="space-y-4 mb-6"></div>
            <div className="flex flex-wrap gap-3 mb-8 py-3"></div>
            <p className="text-sm text-gray-500 font-poppins font-semibold mt-6">
              Can't find what you are looking for?
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="tel:+919220315527"
                title="Call Admission Queries"
                className="bg-vgu-red p-3 rounded-full cursor-pointer hover:bg-vgu-red-dark transition"
              >
                <Phone className="text-white w-7 h-7" />
              </a>
              <p className="text-xl font-semibold font-poppins">
                Let's connect over a quick call
              </p>
            </div>
          </div>
          <div className="hidden lg:block w-[70%] max-w-[800px]">
            <img
              alt="FAQ illustration"
              className="w-full object-contain"
              src="/faq-ZVqf7fGv.webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
