import { PhoneCall, MessageCircle } from "lucide-react";

const ChatWidget = () => {
  return (
    <div className="fixed bottom-5 right-5 z-[1000] flex flex-col gap-3">
      <a
        href="tel:+917204280689"
        className="flex items-center bg-[#0056d2] px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-white no-underline"
      >
        <PhoneCall className="w-7 h-7 mr-3" />
        <span className="text-base font-bold whitespace-nowrap">Talk to Expert</span>
      </a>
      <a
        href="https://wa.me/917204280689"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#25d366] px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-white no-underline"
      >
        <MessageCircle className="w-7 h-7 mr-3" />
        <span className="text-base font-bold whitespace-nowrap">Chat with Us</span>
      </a>
    </div>
  );
};

export default ChatWidget;