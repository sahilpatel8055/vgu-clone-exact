import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, IndianRupee, BookOpen } from "lucide-react";
import { useState } from "react";
import CounselingFormDialog from "./CounselingFormDialog";

interface Program {
  id: string;
  title: string;
  fullName: string;
  image: string;
  badge: string;
  duration: string;
  fee: string;
  rating: number;
}

const programs: Program[] = [
  {
    id: "ba",
    title: "Online BA",
    fullName: "Bachelor of Arts",
    image: "/baImage.webp",
    badge: "On the Rise",
    duration: "36 months",
    fee: "INR 72,000",
    rating: 4.5,
  },
  {
    id: "bba",
    title: "Online BBA",
    fullName: "Bachelor of Business Administration",
    image: "/bbaImage.webp",
    badge: "Top Choice",
    duration: "36 months",
    fee: "INR 1,32,000",
    rating: 4.7,
  },
  {
    id: "bca",
    title: "Online BCA",
    fullName: "Bachelor of Computer Application",
    image: "/bcaImage.webp",
    badge: "In-Demand",
    duration: "36 months",
    fee: "INR 1,32,000",
    rating: 4.8,
  },
  {
    id: "ma",
    title: "Online MA",
    fullName: "Master of Arts",
    image: "/maImage.webp",
    badge: "Highly Rated",
    duration: "24 months",
    fee: "INR 72,000",
    rating: 4.4,
  },
  {
    id: "mba",
    title: "Online MBA",
    fullName: "Master of Business Administration",
    image: "/mbaImage.webp",
    badge: "Best of the Best",
    duration: "24 months",
    fee: "INR 1,50,000",
    rating: 4.5,
  },
  {
    id: "mba-if",
    title: "Online MBA-IF",
    fullName: "MBA in International Finance",
    image: "/mbaIfImage.webp",
    badge: "On the Rise",
    duration: "24 months",
    fee: "INR 2,40,000",
    rating: 4.3,
  },
  {
    id: "mca",
    title: "Online MCA",
    fullName: "Master of Computer Application",
    image: "/mcaImage.webp",
    badge: "Best Selling",
    duration: "24 months",
    fee: "INR 1,50,000",
    rating: 4.6,
  },
  {
    id: "majmc",
    title: "Online MAJMC",
    fullName: "Master of Arts in Journalism & Mass Communication",
    image: "/majmcImage.webp",
    badge: "Buzzing",
    duration: "24 months",
    fee: "INR 72,000",
    rating: 4.6,
  },
  {
    id: "msc",
    title: "Online M.Sc",
    fullName: "Master of Science Mathematics",
    image: "/mscImage.webp",
    badge: "Top Picks",
    duration: "24 months",
    fee: "INR 72,000",
    rating: 4.6,
  },
];

const ProgramsSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          centerMode: false,
          centerPadding: '0px',
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="dot w-3 h-3 rounded-full transition-all duration-300" />,
  };

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(127, 24, 19, 0.9), rgba(127, 24, 19, 0.9))",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center py-10">
          <h2 className="custom-heading-text text-white">Explore Online VGU Programs</h2>
          <div className="flex justify-center">
            <hr className="w-3/5 h-[3px] bg-white border-0 rounded mt-2.5" />
          </div>
          <p className="custom-subheading-text text-white">
            Crafted to Fit Your Pocket, Your Time, and Your Career Goals
          </p>
        </div>

        <div className="programs-slider">
          <Slider {...sliderSettings}>
            {programs.map((program) => (
              <div key={program.id} className="p-3">
                <div className="relative bg-white rounded-xl shadow-md h-[390px] flex flex-col justify-between">
                  <div className="relative">
                    <img
                      alt={program.fullName}
                      className="w-full h-48 object-cover rounded-t-xl"
                      src={program.image}
                    />
                    <div className="absolute top-2 left-2 bg-[#7F1813] text-white px-2 py-1 text-xs rounded-full font-medium shadow">
                      {program.badge}
                    </div>
                  </div>
                  
                  <div className="px-4 py-3 flex flex-col gap-1 flex-grow">
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-[#7F1813] leading-tight">
                        {program.title}
                      </p>
                      <span className="text-sm font-semibold bg-white px-3 py-1 rounded-xl custom-text-gradient">
                        {program.rating} <span className="text-yellow-400">★</span>
                      </span>
                    </div>
                    
                    <p className="text-md text-black font-bold mt-0.5">{program.fullName}</p>
                    
                    <div className="mt-3 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#7F1813]" />
                        <span className="font-bold">Duration:</span>
                        <span className="text-gray-700 font-medium">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IndianRupee className="w-4 h-4 text-[#7F1813]" />
                        <span className="font-bold">Fee:</span>
                        <span className="text-gray-700 font-medium">{program.fee}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="absolute bottom-3 left-3 bg-[#7F1813] text-white text-xs font-semibold px-4 py-1 rounded-lg cursor-pointer hover:bg-[#6B1410] transition-colors"
                  >
                    View Program
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <CounselingFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />

      <style>{`
        .programs-slider .slick-prev,
        .programs-slider .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        
        .programs-slider .slick-prev {
          left: -10px;
        }
        
        .programs-slider .slick-next {
          right: -10px;
        }
        
        .programs-slider .slick-prev:before,
        .programs-slider .slick-next:before {
          font-size: 32px;
          color: white;
        }
        
        @media (max-width: 640px) {
          .programs-slider .slick-prev {
            left: 10px;
          }
          
          .programs-slider .slick-next {
            right: 10px;
          }
          
          .programs-slider .slick-prev:before,
          .programs-slider .slick-next:before {
            font-size: 28px;
          }
        }
        
        .programs-slider .slick-dots {
          bottom: -35px;
        }
        
        .programs-slider .slick-dots li {
          margin: 0 4px;
        }
        
        .programs-slider .slick-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.5;
        }
        
        .programs-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default ProgramsSection;
