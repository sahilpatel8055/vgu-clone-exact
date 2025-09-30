import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-10 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-start text-[15px] p-5">
        <div>
          <h2 className="font-bold text-xl mb-2">Contact Us</h2>
          <div className="h-[2px] w-14 bg-white mb-4 mx-auto md:mx-0"></div>
          <p className="mb-2">
            Admission Queries:{" "}
            <a href="tel:+917204280689" className="text-blue-400 hover:underline">
              +917204280689
            </a>
          </p>
          <p className="mb-2">
            Student Helpline:{" "}
            <a href="tel:+917204280689" className="text-blue-400 hover:underline">
              +917204280689
            </a>
          </p>
          <p className="mb-2">
            Email: <span className="text-blue-400">admissions@onlinevgu.com</span>
          </p>
          <p className="mb-4">
            Address:{" "}
            <span className="text-blue-400">
              VGU Campus, Sec-36, NRI, Jagatpura, Jaipur
            </span>
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">Discover Us</h2>
          <div className="h-[2px] w-14 bg-white mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:underline text-left w-full cursor-pointer"
              >
                About VGU
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="hover:underline text-left w-full cursor-pointer"
              >
                Testimonials
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">Online Programs</h2>
          <div className="h-[2px] w-14 bg-white mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2">
            <li>
              <button className="hover:underline text-left w-full cursor-pointer">
                Online BBA
              </button>
            </li>
            <li>
              <button className="hover:underline text-left w-full cursor-pointer">
                Online BCA
              </button>
            </li>
            <li>
              <button className="hover:underline text-left w-full cursor-pointer">
                Online BA
              </button>
            </li>
            <li>
              <button className="hover:underline text-left w-full cursor-pointer">
                Online MBA
              </button>
            </li>
            <li>
              <button className="hover:underline text-left w-full cursor-pointer">
                Online MCA
              </button>
            </li>
            <li>
              <button className="hover:underline text-left w-full cursor-pointer">
                Online M.Sc.
              </button>
            </li>
            <li>
              <button className="hover:underline text-left w-full cursor-pointer">
                Online M.A. English
              </button>
            </li>
            <li>
              <button className="hover:underline text-left w-full cursor-pointer">
                Online M.A. JMC
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2">Resources</h2>
          <div className="h-[2px] w-14 bg-white mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2">
            <li>
              <a
                href="/documents/AICTE-No-Objection-Certificate-DdGc8QcG.pdf"
                download="AICTE-No-Objection-Certificate.pdf"
                className="hover:underline"
              >
                AICTE-NOC
              </a>
            </li>
            <li>
              <a
                href="/documents/UGC-Approval-for-Jan-2023-Session-for-OL-programs-D4qcaDqf.pdf"
                download="UGC-Approval-2023.pdf"
                className="hover:underline"
              >
                UGC Approval
              </a>
            </li>
            <li>
              <a
                href="/documents/refundPolicy-Dg9rVrCo.pdf"
                download="Refund-Policy.pdf"
                className="hover:underline"
              >
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href="/documents/Newsletter-C8iEjUMg.pdf"
                download="Newsletter.pdf"
                className="hover:underline"
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href="/documents/AcademicCalendarJuly24-CbrFnfbG.pdf"
                download="AcademicCalendarJuly24.pdf"
                className="hover:underline"
              >
                Academic Calendar
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4 justify-center mt-8">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-3 rounded-full hover:bg-vgu-red transition"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-3 rounded-full hover:bg-vgu-red transition"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-3 rounded-full hover:bg-vgu-red transition"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-3 rounded-full hover:bg-vgu-red transition"
        >
          <Linkedin size={20} />
        </a>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © 2025 Online VGU. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
