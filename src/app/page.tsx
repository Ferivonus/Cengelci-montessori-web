import TopNavbar from "../components/generals/TopNavbar";
import FeatureSection from '../components/main_page/FeatureSection';
import AboutSchoolSection from "@/components/main_page/AboutSchoolSection";

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <main >

        <FeatureSection /> 
        <AboutSchoolSection />

      </main>
    </div>
  );
}
