import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar
        brand="Skyli"
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
