import Navbar from "../components/Navbar";
import MyLogoWhite from "../assets/logo-font-white.svg";
import MoonLogoWhite from "../assets/moon-logo-white.svg";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src="/src/assets/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Navbar */}
      <Navbar
        logo={MyLogoWhite}
        menuIcon={MoonLogoWhite}
        links={[
          { label: "About", path: "/about" },
          { label: "Music", path: "/music" },
          { label: "Contact", path: "/contact" },
          { label: "Shop", path: "/shop" },
        ]}
        className="relative z-20 bg-transparent"
      />

      {/* Innehåll */}
      <main className="relative z-20 flex items-center justify-center h-full">
        <img src={MyLogoWhite} alt="Skyli Logo" className="w-sm opacity-50" />
      </main>
    </div>
  );
}
