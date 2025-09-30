import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <AboutSection />
      <ChatWidget />
    </div>
  );
};

export default Index;
