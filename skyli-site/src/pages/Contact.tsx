import Navbar from "../components/Navbar";
import MyLogo from "../assets/logo-font.svg";

export default function Contact() {
  return (
    <div>
      <Navbar
        logo={MyLogo}
        links={[
          { label: "About", path: "/about" },
          { label: "Music", path: "/music" },
          { label: "Contact", path: "/contact" },
          { label: "Shop", path: "/shop" },
        ]}
      />
    </div>
  );
}
