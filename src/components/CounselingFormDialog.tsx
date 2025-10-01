import { RefreshCw, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CounselingFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CounselingFormDialog = ({ open, onOpenChange }: CounselingFormDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    course: "",
    state: "",
    city: "",
    areYou: "",
    gender: "",
    captcha: ""
  });

  const [captchaText] = useState("2R8BEM");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] md:max-w-3xl p-0 gap-0 bg-transparent border-none overflow-y-auto max-h-[90vh] md:max-h-[85vh] !top-[50%] !left-[50%] !translate-x-[-50%] !translate-y-[-50%]">
        <div className="flex flex-col md:flex-row h-fit bg-white rounded-lg overflow-hidden w-full">
          {/* Left side - Campus image (desktop only) */}
          <div className="hidden md:block md:w-1/2 relative min-h-[550px]">
            <img 
              src="/whoweare-DxdwyeV8.webp" 
              alt="VGU Campus" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side - Form */}
          <div className="w-full md:w-1/2 p-4 px-6 md:p-5 relative">
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
            >
              <X size={18} />
            </button>

            <DialogHeader className="mb-2 md:mb-3">
              <DialogTitle className="text-sm md:text-lg font-bold text-[#7F1813] text-center pr-5">
                Great Decision! Let's Connect With You Soon
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-1.5 md:space-y-2">
              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                <div>
                  <label className="block text-[10px] md:text-xs font-medium mb-0.5">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-2 py-1 md:py-1.5 border border-gray-300 rounded-full text-[10px] md:text-xs outline-none focus:border-[#7F1813]"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-medium mb-0.5">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-2 py-1 md:py-1.5 border border-gray-300 rounded-full text-[10px] md:text-xs outline-none focus:border-[#7F1813]"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                <div>
                  <label className="block text-[10px] md:text-xs font-medium mb-0.5">Mobile</label>
                  <input
                    type="tel"
                    placeholder="Enter phone"
                    maxLength={10}
                    className="w-full px-2 py-1 md:py-1.5 border border-gray-300 rounded-full text-[10px] md:text-xs outline-none focus:border-[#7F1813]"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-medium mb-0.5">Select Course</label>
                  <select
                    className="w-full px-2 py-1 md:py-1.5 border border-gray-300 rounded-full text-[10px] md:text-xs outline-none focus:border-[#7F1813] bg-white"
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

              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                <div>
                  <label className="block text-[10px] md:text-xs font-medium mb-0.5">Select State</label>
                  <select
                    className="w-full px-2 py-1 md:py-1.5 border border-gray-300 rounded-full text-[10px] md:text-xs outline-none focus:border-[#7F1813] bg-white"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                  >
                    <option value="">Select your state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-medium mb-0.5">City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    className="w-full px-2 py-1 md:py-1.5 border border-gray-300 rounded-full text-[10px] md:text-xs outline-none focus:border-[#7F1813]"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                <div>
                  <label className="block text-[10px] md:text-xs font-medium mb-0.5">Are You?</label>
                  <select
                    className="w-full px-2 py-1 md:py-1.5 border border-gray-300 rounded-full text-[10px] md:text-xs outline-none focus:border-[#7F1813] bg-white"
                    value={formData.areYou}
                    onChange={(e) => setFormData({...formData, areYou: e.target.value})}
                  >
                    <option value="">-- Select --</option>
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Parents">Parents</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-medium mb-0.5">Gender</label>
                  <select
                    className="w-full px-2 py-1 md:py-1.5 border border-gray-300 rounded-full text-[10px] md:text-xs outline-none focus:border-[#7F1813] bg-white"
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

              <div className="flex items-center gap-1.5 my-1">
                <div className="bg-gray-200 text-xs md:text-sm font-bold tracking-wider px-2.5 py-1 md:py-1.5 rounded flex gap-0.5 select-none">
                  <span className="text-[#2AB89D]">2</span>
                  <span className="text-[#E57373]">R</span>
                  <span className="text-[#7E57C2]">8</span>
                  <span className="text-[#FFB74D]">B</span>
                  <span className="text-[#4FC3F7]">E</span>
                  <span className="text-[#E57373]">M</span>
                </div>
                <button type="button" className="text-gray-600 hover:text-gray-800">
                  <RefreshCw size={16} />
                </button>
              </div>

              <input
                type="text"
                placeholder="Enter captcha"
                className="w-full px-2 py-1 md:py-1.5 border border-gray-300 rounded-full text-[10px] md:text-xs outline-none focus:border-[#7F1813]"
                required
                value={formData.captcha}
                onChange={(e) => setFormData({...formData, captcha: e.target.value})}
              />

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-1.5 md:py-2 rounded-full hover:bg-gray-800 transition-colors text-xs md:text-sm mt-1"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CounselingFormDialog;