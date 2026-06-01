import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import CentersSection from "@/components/CentersSection";
import Stats from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
           <StatsSection />
      <VisionMission />
            <CentersSection />

      <Courses />
    </>
  );
}