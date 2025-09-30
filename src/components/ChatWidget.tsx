import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat with Us Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Chat with Us
        </Button>
      </div>

      {/* Talk to Expert Button */}
      <div className="fixed bottom-6 right-40 z-50">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 shadow-lg">
          🗣️ Talk to Expert
        </Button>
      </div>

      {/* Chat Modal (Optional) */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
          <div className="flex items-center justify-between p-4 border-b bg-green-500 text-white rounded-t-lg">
            <h3 className="font-semibold">Chat with us</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-600"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 h-full flex items-center justify-center text-gray-500">
            <p>Chat widget would be integrated here</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;