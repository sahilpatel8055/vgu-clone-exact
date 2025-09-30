import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RankingsSection from "@/components/RankingsSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyVGUSection from "@/components/WhyVGUSection";
import ImpactSection from "@/components/ImpactSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import PedagogySection from "@/components/PedagogySection";
import AdmissionProcessSection from "@/components/AdmissionProcessSection";
import DegreeJourneySection from "@/components/DegreeJourneySection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
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
      <PedagogySection />
      <AdmissionProcessSection />
      <DegreeJourneySection />
      <CommunitySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
