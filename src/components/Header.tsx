import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/logos/logo.svg" 
              alt="VGU Logo" 
              className="h-12 w-auto"
            />
            <img 
              src="/assets/logos/naac.svg" 
              alt="NAAC A+ Grade" 
              className="h-12 w-auto"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            className="bg-vgu-red hover:bg-vgu-red-dark text-white font-semibold px-6 py-2"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;