import { Menu } from "lucide-react";
import { useState } from "react";
import CounselingFormDialog from "./CounselingFormDialog";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-gray-200">
      <div className="flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <a href="/" data-discover="true">
            <img alt="logo" className="h-14 cursor-pointer" src="/assets/logos/logo.svg" />
          </a>
          <a href="/" data-discover="true">
            <img alt="NAAC logo" className="h-10" src="/assets/logos/naac.svg" />
          </a>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8 font-bold text-lg text-gray-700">
            <li>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="custom-btn-bg text-white px-6 py-2 rounded-lg transition duration-200 font-poppins cursor-pointer"
              >
                Apply Now
              </button>
            </li>
          </ul>
        </nav>
        <button className="lg:hidden focus:outline-none" aria-label="Toggle menu">
          <Menu size={30} />
        </button>
      </div>
      <CounselingFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
};

export default Header;