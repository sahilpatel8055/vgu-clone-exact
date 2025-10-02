import { RefreshCw } from "lucide-react";
import { useState } from "react";
import Slider from "react-slick";
import { useToast } from "@/hooks/use-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace this with your Render backend URL after deployment
const API_URL = import.meta.env.VITE_API_URL || "YOUR_RENDER_BACKEND_URL";

const HeroSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    course: "",
    state: "",
    city: "",
    areyou: "",
    gender: "",
    captcha: ""
  });

  const [captchaText] = useState("LTGJGS");

  const courses = [
    { value: "Bachelor of Arts in Economics", label: "BA Economics" },
    { value: "Bachelor of Arts in History", label: "BA History" },
    { value: "Bachelor of Arts in Public Policy & Development", label: "BA Public Policy & Development" },
    { value: "Bachelor of Arts in Political Science", label: "BA Political Science" },
    { value: "Bachelor of Arts in English", label: "BA English" },
    { value: "Bachelor of Arts in Computer Application", label: "BA Computer Application" },
    { value: "Bachelor of Arts in International Relations", label: "BA International Relations" },
    { value: "Bachelor of Business Administration", label: "BBA General" },
    { value: "Bachelor of Business Administration in Digital Marketing", label: "BBA in Digital Marketing" },
    { value: "Bachelor of Business Administration in Retail Management", label: "BBA in Retail Management" },
    { value: "Bachelor of Business Administration in Fintech Management", label: "BBA in Fintech Management" },
    { value: "Bachelor of Computer Applications", label: "BCA General" },
    { value: "Bachelor of Computer Applications in AI", label: "BCA in AI" },
    { value: "Bachelor of Computer Applications in Data Science", label: "BCA in Data Science" },
    { value: "Bachelor of Computer Applications in Cloud Technology and Information Security", label: "BCA in Cloud Technology and Information Security" },
    { value: "Bachelor of Computer Applications in Blockchain", label: "BCA in Blockchain Technology" },
    { value: "Bachelor of Computer Applications in UX", label: "BCA in UX" },
    { value: "Master of Arts in English", label: "M.A. English" },
    { value: "Master of Arts in Journalism and Mass Communication", label: "M.A. JMC" },
    { value: "Master of Business Administration", label: "MBA General" },
    { value: "Master of Business Administration in HR Management", label: "MBA in HR Management" },
    { value: "Master of Business Administration in Marketing", label: "MBA in Marketing" },
    { value: "Master of Business Administration in Financial Management", label: "MBA in Financial Management" },
    { value: "Master of Business Administration in Healthcare Management", label: "MBA in Healthcare Management" },
    { value: "Master of Business Administration in Agri Business", label: "MBA in Agri Business" },
    { value: "Master of Business Administration in IT Management", label: "MBA in IT Management" },
    { value: "Master of Business Administration in International Business Management", label: "MBA in International Business Management" },
    { value: "Master of Business Administration in Operations Management", label: "MBA in Operations Management" },
    { value: "Master of Business Administration in International Finance", label: "MBA IF" },
    { value: "Master of Computer Applications", label: "MCA" },
    { value: "Master of Science in Mathematics", label: "M.Sc. Mathematics" }
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.captcha !== captchaText) {
      toast({
        title: "Invalid Captcha",
        description: "Please enter the correct captcha",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          state: formData.state,
          city: formData.city,
          profession: formData.areyou,
          gender: formData.gender
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit form');
      }

      toast({
        title: "Success!",
        description: "Your details have been submitted successfully",
      });

      setFormData({
        firstName: "",
        email: "",
        phone: "",
        course: "",
        state: "",
        city: "",
        areyou: "",
        gender: "",
        captcha: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-20 px-4 sm:px-8 font-poppins font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2">
          <Slider {...sliderSettings}>
            <div>
              <img alt="Slide 1" className="w-full h-full object-cover rounded-lg" src="/assets/hero/slide2M.webp" />
            </div>
            <div>
              <img alt="Slide 2" className="w-full h-full object-cover rounded-lg" src="/assets/hero/slide3M.webp" />
            </div>
          </Slider>
        </div>
        
        <div className="w-full md:w-1/2 max-w-md mx-auto md:mx-0">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#7F1813] text-center">
              Great Decision! Let's Connect With You Soon
            </h2>
            
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="block text-sm mb-1">Full Name</label>
                  <input
                    placeholder="Enter your name"
                    className="w-full p-2 border border-gray-300 rounded-3xl text-sm outline-none"
                    required
                    type="text"
                    value={formData.firstName}
                    name="firstName"
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    placeholder="Enter email"
                    className="w-full p-2 border border-gray-300 rounded-3xl text-sm outline-none"
                    required
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="block text-sm mb-1">Mobile</label>
                  <input
                    placeholder="Enter phone"
                    maxLength={10}
                    className="w-full p-2 border border-gray-300 rounded-3xl text-sm outline-none"
                    required
                    type="tel"
                    value={formData.phone}
                    name="phone"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm mb-1">Course</label>
                  <select
                    name="course"
                    className="w-full p-2 border border-gray-300 rounded-3xl text-sm"
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.value} value={course.value}>
                        {course.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="block text-sm mb-1">State</label>
                  <select
                    name="state"
                    className="w-full p-2 border border-gray-300 rounded-3xl text-sm"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                  >
                    <option value="">Select state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm mb-1">City</label>
                  <input
                    placeholder="Enter city"
                    className="w-full p-2 border border-gray-300 rounded-3xl text-sm"
                    required
                    type="text"
                    value={formData.city}
                    name="city"
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="block text-sm mb-1">Are You?</label>
                  <select
                    name="areyou"
                    className="w-full p-2 border border-gray-300 rounded-3xl text-sm"
                    value={formData.areyou}
                    onChange={(e) => setFormData({...formData, areyou: e.target.value})}
                  >
                    <option value="">-- Select --</option>
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Parents">Parents</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm mb-1">Gender</label>
                  <select
                    name="gender"
                    className="w-full p-2 border border-gray-300 rounded-3xl text-sm"
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  >
                    <option value="">-- Select --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center my-3">
                <div className="bg-gray-200 text-lg font-bold tracking-widest px-4 py-2 rounded flex gap-1 select-none">
                  <span style={{color: "rgb(233, 196, 106)"}}>L</span>
                  <span style={{color: "rgb(244, 162, 97)"}}>T</span>
                  <span style={{color: "rgb(141, 153, 174)"}}>G</span>
                  <span style={{color: "rgb(42, 157, 143)"}}>J</span>
                  <span style={{color: "rgb(29, 53, 87)"}}>G</span>
                  <span style={{color: "rgb(244, 162, 97)"}}>S</span>
                </div>
                <button type="button" className="ml-2">
                  <RefreshCw size={24} />
                </button>
              </div>
              
              <input
                placeholder="Enter captcha"
                className="w-full px-3 py-2 border border-gray-300 rounded-3xl mb-2 outline-none"
                type="text"
                value={formData.captcha}
                onChange={(e) => setFormData({...formData, captcha: e.target.value})}
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="border w-full rounded-3xl cursor-pointer bg-black text-white py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;