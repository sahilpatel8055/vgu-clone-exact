import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img 
              src="/assets/hero/slide3M.webp" 
              alt="VGU Campus Life" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-vgu-gray-800 mb-4">
                Who <span className="text-vgu-red">We Are</span>
              </h2>
              <p className="text-lg text-vgu-gray-600 leading-relaxed">
                VGU is North India's youngest NAAC A+ accredited university, committed to providing 
                world-class education through innovative online learning platforms. We bridge the gap 
                between traditional education and modern industry requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center border-vgu-red/20">
                <div className="text-3xl font-bold text-vgu-red mb-2">50+</div>
                <div className="text-sm text-vgu-gray-600">Expert Faculty</div>
              </Card>
              
              <Card className="p-6 text-center border-vgu-red/20">
                <div className="text-3xl font-bold text-vgu-red mb-2">10K+</div>
                <div className="text-sm text-vgu-gray-600">Students Enrolled</div>
              </Card>
              
              <Card className="p-6 text-center border-vgu-red/20">
                <div className="text-3xl font-bold text-vgu-red mb-2">95%</div>
                <div className="text-sm text-vgu-gray-600">Placement Rate</div>
              </Card>
              
              <Card className="p-6 text-center border-vgu-red/20">
                <div className="text-3xl font-bold text-vgu-red mb-2">500+</div>
                <div className="text-sm text-vgu-gray-600">Industry Partners</div>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-vgu-gray-800">Why Choose VGU Online?</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vgu-red rounded-full"></div>
                  <span className="text-vgu-gray-600">Industry-aligned curriculum</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vgu-red rounded-full"></div>
                  <span className="text-vgu-gray-600">Expert faculty with industry experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vgu-red rounded-full"></div>
                  <span className="text-vgu-gray-600">Flexible learning schedules</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vgu-red rounded-full"></div>
                  <span className="text-vgu-gray-600">100% placement assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;