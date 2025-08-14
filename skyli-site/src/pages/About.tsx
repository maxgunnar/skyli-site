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
      <div>
        <img src={aboutPortrait} alt="Portrait of Sky Li" className=" border-white border-3 rounded-[50px] flex justify-self-center" />
      </div>

      <div className="flex justify-center my-8">
        <h1 className="text-8xl text-white ">who is she?</h1>
      </div>
      <section className="grid grid-cols-2 mx-32 gap-4">
        {/* Rad 1 */}
        <Card content="In Sky Li’s world, melodies are constellations..." className="bg-white rounded-tl-[50px] flex items-center px-12" />
        <Card content="" className="bg-[#D3D0C4] rounded-tr-[50px]" img={MyLogo} />

        {/* Rad 2: bilden över två kolumner */}
        <img src={forestPortrait} alt="Portrait of Sky Li in the forest" className="col-span-2 w-full h-auto" />

        {/* Rad 3 */}
        <Card content="" className="bg-[#919A8E] rounded-bl-[50px]" img={MyLogo} />
        <Card content="Drawing from nature’s fragile beauty and the mysterious pull..." className="bg-white rounded-br-[50px] flex items-center px-12" />
      </section>
      <Footer />
    </div>
  );
}
