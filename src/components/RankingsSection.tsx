import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RankingsSection = () => {
  const rankings = [
    { alt: "ranking-0", src: "/ugc-CME1yc9.webp" },
    { alt: "ranking-1", src: "/naac-BCjEOgop.webp" },
    { alt: "ranking-2", src: "/aicte-BKNjOxdn.webp" },
    { alt: "ranking-3", src: "/qs-jZOOeQ2.webp" },
    { alt: "ranking-4", src: "/outlook-DueenIVh.webp" },
    { alt: "ranking-5", src: "/gu-qxpE7X2a.webp" },
    { alt: "ranking-6", src: "/assocham-DVQk7WGV.webp" },
    { alt: "ranking-7", src: "/dialouge-BZCBZbXS.webp" },
    { alt: "ranking-8", src: "/globalleague-D74Vq160.webp" },
    { alt: "ranking-9", src: "/excellence-BPNbhJpO.webp" }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          centerMode: false,
          centerPadding: '0',
          variableWidth: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          centerMode: false,
          centerPadding: '0',
          variableWidth: false,
        }
      }
    ]
  };

  return (
    <div className="px-14 bg-[#fff7f7] pb-14">
      <div className="text-center py-10 max-w-7xl mx-auto">
        <h1 className="custom-heading-text">
          <span className="custom-text-gradient">Rankings</span> & Accreditations
        </h1>
        <div className="flex justify-center">
          <hr className="w-1/2 h-[3px] bg-[#7F1813] border-0 rounded mt-2" />
        </div>
        <p className="custom-subheading-text">Here's why VGU Online is a trusted name in quality education</p>
      </div>
      
      <div className="relative max-w-7xl mx-auto rankings-slider-container">
        <Slider {...sliderSettings}>
          {rankings.map((ranking, index) => (
            <div key={index} className="px-2">
              <div className="rounded-3xl shadow-lg mb-6">
                <img
                  alt={ranking.alt}
                  className="w-full h-auto object-contain mx-auto scale-90"
                  src={ranking.src}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <style>{`
        .rankings-slider-container .slick-prev,
        .rankings-slider-container .slick-next {
          z-index: 10;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .rankings-slider-container .slick-prev {
          left: 10px;
        }
        
        .rankings-slider-container .slick-next {
          right: 10px;
        }
        
        .rankings-slider-container .slick-prev:hover,
        .rankings-slider-container .slick-next:hover {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        .rankings-slider-container .slick-prev:before,
        .rankings-slider-container .slick-next:before {
          font-size: 28px;
          color: #7F1813;
          opacity: 1;
          font-weight: bold;
        }
        
        @media (max-width: 640px) {
          .rankings-slider-container .slick-prev {
            left: -5px;
          }
          
          .rankings-slider-container .slick-next {
            right: -5px;
          }
        }
        
        .rankings-slider-container .slick-dots {
          bottom: -35px;
        }
        
        .rankings-slider-container .slick-dots li {
          margin: 0 4px;
        }
        
        .rankings-slider-container .slick-dots li button:before {
          font-size: 10px;
          color: #7F1813;
          opacity: 0.5;
        }
        
        .rankings-slider-container .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #7F1813;
        }
      `}</style>
    </div>
  );
};

export default RankingsSection;