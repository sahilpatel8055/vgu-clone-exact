import { Volume2 } from "lucide-react";
import Marquee from "react-fast-marquee";

const AnnouncementBar = () => {
  return (
    <div className="flex w-full mt-20">
      <div className="bg-[#7F1813] text-white flex items-center px-4 py-1 space-x-2 md:w-[220px]">
        <Volume2 className="w-6 h-6 text-yellow-400" />
        <span className="font-bold font-poppins">ANNOUNCEMENT</span>
      </div>
      <div className="bg-[#111] text-white flex-1 overflow-hidden font-poppins">
        <Marquee speed={50} gradient={false} className="py-1">
          <span className="mx-10">Admission Open for July 2025 Session</span>
          <span className="mx-10">Limited Seats Available – Apply Now!</span>
          <span className="mx-10">Enroll in BBA, MBA, BCA, or MCA and get free exclusive access to LinkedIn Learning!</span>
        </Marquee>
      </div>
    </div>
  );
};

export default AnnouncementBar;