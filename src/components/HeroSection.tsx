import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const HeroSection = () => {
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

  const courses = [
    "BA Economics",
    "BA History", 
    "BA Public Policy & Development",
    "BA Political Science",
    "BA English",
    "BA Computer Application",
    "BA International Relations",
    "BBA General",
    "BBA in Digital Marketing",
    "BBA in Retail Management",
    "BBA in Fintech Management",
    "BCA General",
    "BCA in AI",
    "BCA in Data Science",
    "BCA in Cloud Technology and Information Security",
    "BCA in Blockchain Technology",
    "BCA in UX",
    "M.A. English",
    "M.A. JMC",
    "MBA General",
    "MBA in HR Management",
    "MBA in Marketing",
    "MBA in Financial Management",
    "MBA in Healthcare Management",
    "MBA in Agri Business",
    "MBA in IT Management",
    "MBA in International Business Management",
    "MBA in Operations Management",
    "MBA IFM",
    "MCA",
    "M.Sc. Mathematics"
  ];

  return (
    <section className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Hero Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-vgu-gray-800 leading-tight">
              Your Journey to the<br />
              Top Begins at <span className="text-vgu-red">Online VGU</span>
            </h1>
            
            <div className="flex items-center gap-4">
              <img 
                src="/assets/logos/logo.svg" 
                alt="VGU" 
                className="h-16 w-auto"
              />
              <div className="text-sm">
                <div className="font-semibold text-vgu-gray-700">NORTH INDIA'S YOUNGEST</div>
                <div className="font-bold text-2xl text-vgu-red">NAAC A+</div>
                <div className="text-vgu-gray-600">ACCREDITED UNIVERSITY</div>
              </div>
            </div>
          </div>

          {/* Rankings Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-sm text-orange-600 font-medium">QS World University Rankings Asia 2025:</div>
              <div className="text-sm">Ranked in the <span className="font-bold text-2xl text-orange-800">681-700</span> Band</div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-red-50 p-3 rounded-lg text-center">
                <div className="text-xs text-red-600">DHEI Rankings 2024</div>
                <div className="text-2xl font-bold text-red-800">3rd</div>
                <div className="text-xs text-red-600">IN PUNJAB</div>
              </div>
              
              <div className="bg-red-50 p-3 rounded-lg text-center">
                <div className="text-xs text-red-600">Graduate Outcomes</div>
                <div className="text-2xl font-bold text-red-800">740</div>
                <div className="text-xs text-red-600">DIAMOND LEAGUE</div>
              </div>
              
              <div className="bg-red-50 p-3 rounded-lg text-center">
                <div className="text-xs text-red-600">Private University</div>
                <div className="text-2xl font-bold text-red-800">3rd</div>
                <div className="text-xs text-red-600">IN PUNJAB</div>
              </div>
            </div>
          </div>

          {/* Campus Image */}
          <div className="relative">
            <img 
              src="/assets/hero/slide2M.webp" 
              alt="VGU Campus" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-vgu-red text-white px-3 py-1 rounded text-sm font-semibold">
              #BeAVGUite
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <Card className="p-6 shadow-xl">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-vgu-red mb-2">
                Great Decision! Let's Connect With You Soon
              </h2>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input 
                    id="mobile"
                    placeholder="Enter phone"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select onValueChange={(value) => setFormData({...formData, course: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select onValueChange={(value) => setFormData({...formData, state: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Are You?</Label>
                  <Select onValueChange={(value) => setFormData({...formData, areYou: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Select --" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="working">Working Professional</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <Select onValueChange={(value) => setFormData({...formData, gender: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Select --" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-mono">F</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-mono">F</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-mono">6</span>
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-mono">S</span>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-mono">H</span>
                  <span className="bg-gray-500 text-white px-2 py-1 rounded text-sm font-mono">5</span>
                  <svg width="20" height="20" className="ml-2">
                    <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <Input 
                  placeholder="Enter captcha"
                  value={formData.captcha}
                  onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3"
              >
                Submit
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;