import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import AwardsRecognition from "@/components/AwardsRecognition";
import Certifications from "@/components/Certifications";
import CareerTimeline from "@/components/CareerTimeline";
import Documentaries from "@/components/Documentaries";
import SocialReach from "@/components/SocialReach";
import AppGrid from "@/components/AppGrid";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { professionalApps, personalApps } from "@/lib/apps";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <div id="work" className="scroll-mt-11"><Documentaries /></div>
      <div id="social" className="scroll-mt-11"><SocialReach /></div>
      <div id="awards" className="scroll-mt-11"><AwardsRecognition /></div>
      <div id="certifications" className="scroll-mt-11"><Certifications /></div>
      <div id="career" className="scroll-mt-11"><CareerTimeline /></div>
      <div id="apps" className="scroll-mt-11">
      <AppGrid
        apps={professionalApps}
        sectionLabel="// BUILT FOR WORK"
        variant="professional"
      />
      <AppGrid
        apps={personalApps}
        sectionLabel="// BUILT FOR THE PEOPLE I LOVE"
        subLabel="The best beta testers are the ones who don't know they're beta testers."
        variant="personal"
      />
      </div>
      <div id="tools" className="scroll-mt-11"><TechStack /></div>
      <div id="contact" className="scroll-mt-11"><ContactSection /></div>
      <Footer />
    </main>
  );
}
