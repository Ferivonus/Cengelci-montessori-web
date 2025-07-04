import WeeklyActivitiesSection from "@/components/fully_pages/WeeklyActivitiesSection";
import TopNavbar from "../components/generals/TopNavbar";
import FeatureSection from '../components/main_page/FeatureSection';
import AboutSchoolSection from "@/components/main_page/AboutSchoolSection";
import NewsletterSubscriptionSection from '../components/fully_pages/NewsletterSubscriptionSection';
import FooterSection from '../components/generals/FooterSection';

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <main >

        <FeatureSection /> 
        <AboutSchoolSection />

        <WeeklyActivitiesSection />

        <NewsletterSubscriptionSection />

        <footer>

          <FooterSection />

        </footer>

      </main>
    </div>
  );
}
