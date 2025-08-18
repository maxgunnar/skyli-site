import Navbar from "../components/Navbar";
import MyLogo from "../assets/logo-font.svg";
import aboutPortrait from "../assets/about-portrait.png";
import forestPortrait from "../assets/forest-portrait.png";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function About() {
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
      <main className="md:max-w-[900px] lg:max-w-[1200px] mx-auto">
        <div className="flex justify-center items-center mt-8 px-4 lg:px-34">
          <img src={aboutPortrait} alt="Portrait of Sky Li" className="w-full h-full object-cover rounded-[50px] border-4 border-white" />
        </div>

        <div className="flex justify-center my-8 px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white">who is she?</h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32 items-stretch">
          <Card content="In Sky Li’s world, melodies are constellations..." className="bg-white md:rounded-tl-[50px] flex items-center px-6 sm:px-8 md:px-12" />
          <Card content="" className="bg-[#D3D0C4] md:rounded-tr-[50px]" img={MyLogo} />
          <img src={forestPortrait} alt="Portrait of Sky Li in the forest" className="w-full h-auto md:col-span-2 rounded-lg" />
          <Card content="" className="bg-[#919A8E] md:rounded-bl-[50px]" img={MyLogo} />
          <Card content="Drawing from nature’s fragile beauty and the mysterious pull..." className="bg-white md:rounded-br-[50px] flex items-center px-6 sm:px-8 md:px-12" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
