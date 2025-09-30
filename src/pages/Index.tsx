import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RankingsSection from "@/components/RankingsSection";
import ProgramsSection from "@/components/ProgramsSection";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <AnnouncementBar />
      <HeroSection />
      <AboutSection />
      <RankingsSection />
      <ProgramsSection />
      <ChatWidget />
    </div>
  );
};

export default Index;
