import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import ProgramsSection from "@/components/ProgramsSection";
import HowWeHelpSection from "@/components/HowWeHelpSection";
import ImpactSection from "@/components/ImpactSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import usePageTitle from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("Awdorg Foundation – Empowering Women with Safety, Support & Self-Reliance");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FocusAreasSection />
        <ProgramsSection />
        <HowWeHelpSection />
        <ImpactSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
