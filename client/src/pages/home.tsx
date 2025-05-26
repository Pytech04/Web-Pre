import { useState } from "react";
import LandingPage from "@/components/landing-page";
import LetterSection from "@/components/letter-section";
import PoemsSection from "@/components/poems-section";
import EmotionalCheckin from "@/components/emotional-checkin";
import SongSection from "@/components/song-section";
import HonestySection from "@/components/honesty-section";
import EasterEgg from "@/components/easter-egg";
import Footer from "@/components/footer";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleEnterSite = () => {
    setShowMainContent(true);
  };

  return (
    <div className="relative">
      {!showMainContent && <LandingPage onEnter={handleEnterSite} />}
      
      {showMainContent && (
        <div className="animate-fadeIn">
          <LetterSection />
          <PoemsSection />
          <EmotionalCheckin />
          <SongSection />
          <HonestySection />
          <Footer />
          <EasterEgg />
        </div>
      )}
    </div>
  );
}
