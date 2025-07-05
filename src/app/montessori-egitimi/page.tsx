import MontessoriEducationPage from "@/components/fully_pages/MontessoriEducationPage";
import FooterSection from "@/components/generals/FooterSection";
import TopNavbar from "@/components/generals/TopNavbar";

export default function MontessoriEgitimi() {
  return (
      <div>
        <TopNavbar />
          <main>
            <MontessoriEducationPage />
      </main>
      
      <footer>
      
                <FooterSection />
      
              </footer>
    </div>
    
  );
}