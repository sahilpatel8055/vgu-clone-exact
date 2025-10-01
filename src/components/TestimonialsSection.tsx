import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
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
  };

  const testimonials = [
    { id: 1, image: "/test1-D2-2w-pG.webp" },
    { id: 2, image: "/test2-CIxVXewK.webp" },
    { id: 3, image: "/test3-BnbGLTiB.webp" },
    { id: 4, image: "/test4-DnfxagsN.webp" },
    { id: 5, image: "/test5-DXUlBRKg.webp" },
    { id: 6, image: "/test6-BAoQfeY4.webp" },
    { id: 7, image: "/test7-B0Z7L5D3.webp" },
  ];

  return (
    <section className="w-full bg-vgu-red py-12 pb-16" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 text-center testimonials-slider-container">
        <h2 className="custom-heading-text text-white">Learner Testimonials</h2>
        <div className="flex justify-center">
          <hr className="md:w-1/2 w-1/2 h-[3px] bg-white border-0 rounded" />
        </div>
        <p className="custom-subheading-text text-white mb-12">
          2 out of every 3 VGU learners are employed while studying!
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
                <img
                  alt={`Testimonial ${testimonial.id}`}
                  className="w-full h-auto object-cover"
                  src={testimonial.image}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <style>{`
        .testimonials-slider-container .slick-prev,
        .testimonials-slider-container .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        
        .testimonials-slider-container .slick-prev {
          left: -20px;
        }
        
        .testimonials-slider-container .slick-next {
          right: -20px;
        }
        
        .testimonials-slider-container .slick-prev:before,
        .testimonials-slider-container .slick-next:before {
          font-size: 32px;
          color: white;
        }
        
        @media (max-width: 640px) {
          .testimonials-slider-container .slick-prev {
            left: 10px;
          }
          
          .testimonials-slider-container .slick-next {
            right: 10px;
          }
          
          .testimonials-slider-container .slick-prev:before,
          .testimonials-slider-container .slick-next:before {
            font-size: 28px;
          }
        }
        
        .testimonials-slider-container .slick-dots {
          bottom: -35px;
        }
        
        .testimonials-slider-container .slick-dots li {
          margin: 0 4px;
        }
        
        .testimonials-slider-container .slick-dots li button:before {
          font-size: 10px;
          color: white;
          opacity: 0.5;
        }
        
        .testimonials-slider-container .slick-dots li.slick-active button:before {
          opacity: 1;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
