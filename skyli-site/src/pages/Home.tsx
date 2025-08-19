import Navbar from "../components/Navbar";
import MyLogoWhite from "../assets/logo-font-white.svg";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Video background som fyller hela skärmen */}
      <video className="fixed top-0 left-0 w-full h-full object-cover z-0" src="/src/assets/video.mp4" autoPlay loop muted playsInline />

      {/* Overlay om du vill mörka ner videon lite */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Navbar ovanpå videon */}
      <Navbar
        logo={MyLogoWhite}
        links={[
          { label: "About", path: "/about" },
          { label: "Music", path: "/music" },
          { label: "Contact", path: "/contact" },
          { label: "Shop", path: "/shop" },
        ]}
        className="relative z-20 bg-transparent"
      />

      {/* Innehåll under navbar (om du vill) */}
      <main className="relative z-20 pt-20">
        {/* Exempel på innehåll */}
        <div className="flex items-center justify-center h-screen">
          <img src={MyLogoWhite} alt="Skyli Logo" className="w-4xl opacity-25"/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
