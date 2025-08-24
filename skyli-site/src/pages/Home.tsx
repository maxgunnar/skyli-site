// Home.tsx
import Navbar from "../components/Navbar";
import { navLinks } from "../data/navLinks";
import MyLogoWhite from "../assets/logo-font-white.svg";
import MoonLogoWhite from "../assets/moon-logo-white.svg";
import bgVideo from "../assets/video.mp4";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-10" />

      <Navbar
        logo={MyLogoWhite}
        menuIcon={MoonLogoWhite}
        links={navLinks}
        className="relative z-20 bg-transparent"
      />

      <main className="relative z-20 flex items-center justify-center h-full">
        <img src={MyLogoWhite} alt="Skyli Logo" className="w-sm opacity-50" />
      </main>
    </div>
  );
}
