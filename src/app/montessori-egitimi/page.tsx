// app/montessori-egitimi/page.tsx (örnek)

import MontessoriEducationPage from "@/components/MontessoriEducationPage";
import TopNavbar from "@/components/TopNavbar";

export default function MontessoriEgitimi() {
  return (
      <div>
        <TopNavbar />
          <main>
            <MontessoriEducationPage />
          </main>
    </div>
    
  );
}