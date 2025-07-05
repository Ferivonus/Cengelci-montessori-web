import TopNavbar from "../components/TopNavbar";
import FeatureSection from '../components/FeatureSection';
import AboutSchoolSection from "@/components/AboutSchoolSection";

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <main >

        <FeatureSection />
        
        <AboutSchoolSection />
        // Motivasyon mektubu için state
      </main>
    </div>
  );
}
