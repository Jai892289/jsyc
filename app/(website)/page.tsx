import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import CentersSection from "@/components/CentersSection";
import Stats from "@/components/Stats";
import ImportantDesk from "@/components/ImportantDesk";
import Administratives from "@/components/Administrative";
import HeroCentersSection from "@/components/HeroCenter";
import CTASection from "@/components/CTASection";
import GovernmentPartners from "@/components/Partner";

export default function HomePage() {
  return (
    <>
      <Hero />
           <StatsSection />
      <VisionMission />
            <CentersSection />
            <ImportantDesk />
            <Administratives />

      <Courses />
      <HeroCentersSection />
      <CTASection />
      <GovernmentPartners />
    </>
  );
}