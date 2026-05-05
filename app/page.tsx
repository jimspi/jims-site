import Hero from "@/components/Hero";
import AwardsRecognition from "@/components/AwardsRecognition";
import Certifications from "@/components/Certifications";
import CareerTimeline from "@/components/CareerTimeline";
import Documentaries from "@/components/Documentaries";
import SocialReach from "@/components/SocialReach";
import AppGrid from "@/components/AppGrid";
import BuildPhilosophy from "@/components/BuildPhilosophy";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { professionalApps, personalApps } from "@/lib/apps";

export default function Home() {
  return (
    <main>
      <Hero />
      <Documentaries />
      <SocialReach />
      <AwardsRecognition />
      <Certifications />
      <CareerTimeline />
      <AppGrid
        apps={professionalApps}
        sectionLabel="// BUILT FOR WORK"
        subLabel="Every one of these started with a problem I had and no solution that existed."
        variant="professional"
      />
      <AppGrid
        apps={personalApps}
        sectionLabel="// BUILT FOR THE PEOPLE I LOVE"
        subLabel="The best beta testers are the ones who don't know they're beta testers."
        variant="personal"
      />
      <BuildPhilosophy />
      <TechStack />
      <ContactSection />
      <Footer />
    </main>
  );
}
