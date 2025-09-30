import { Volume2 } from "lucide-react";
import Marquee from "react-fast-marquee";

const AnnouncementBar = () => {
  return (
    <div className="bg-vgu-red text-white py-2">
      <div className="flex items-center gap-4 px-4">
        <Volume2 className="w-4 h-4 flex-shrink-0" />
        <div className="flex-1">
          <Marquee speed={50} gradient={false}>
            <span className="mx-8 font-medium text-sm">
              Admission Open for July 2025 Session
            </span>
            <span className="mx-8 font-medium text-sm">
              Limited Seats Available – Apply Now!
            </span>
            <span className="mx-8 font-medium text-sm">
              Enroll in BBA, MBA, BCA, or MCA and get free exclusive access to LinkedIn Learning!
            </span>
            <span className="mx-8 font-medium text-sm">
              Admission Open for July 2025 Session
            </span>
            <span className="mx-8 font-medium text-sm">
              Limited Seats Available – Apply Now!
            </span>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;