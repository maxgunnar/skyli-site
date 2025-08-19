import Navbar from "../components/Navbar";
import MyLogoWhite from "../assets/logo-font-white.svg";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar
        logo={MyLogoWhite}
        links={[
          { label: "About", path: "/about" },
          { label: "Music", path: "/music" },
          { label: "Contact", path: "/contact" },
          { label: "Shop", path: "/shop" },
        ]}
      />
      <Footer />
    </div>
  );
}
