import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RankingsSection from "@/components/RankingsSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyVGUSection from "@/components/WhyVGUSection";
import ImpactSection from "@/components/ImpactSection";
import GlobalReachSection from "@/components/GlobalReachSection";
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
      <WhyVGUSection />
      <ImpactSection />
      <GlobalReachSection />
      <ChatWidget />
    </div>
  );
};

export default Index;
