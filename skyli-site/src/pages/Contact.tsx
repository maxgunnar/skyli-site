import Navbar from "../components/Navbar";
import MyLogoWhite from "../assets/logo-font-white.svg";
import MoonLogoWhite from "../assets/moon-logo-white.svg";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
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
      <Footer />
    </div>
  );
}
