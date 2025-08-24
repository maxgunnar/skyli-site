import Navbar from "../components/Navbar";
import MyLogoWhite from "../assets/logo-font-white.svg";
import Footer from "../components/Footer";
import MusicBox from "../components/MusicBox";
import BeforeTheEnd from "../assets/before-the-end.png";
import Her from "../assets/her.png";
import Close from "../assets/close.png";
import Satellite from "../assets/satellite.png";
import Bittersweet from "../assets/bittersweet.png";
import Porcelain from "../assets/porcelain.png";
import VideoBox from "../components/VideoBox";
import MoonLogoWhite from "../assets/moon-logo-white.svg"

export default function Music() {
  const songs = [
    { imgSource: BeforeTheEnd, title: "Before the end" },
    { imgSource: Her, title: "Her" },
    { imgSource: Close, title: "Close" },
    { imgSource: Satellite, title: "Satellite" },
    { imgSource: Bittersweet, title: "Bittersweet" },
    { imgSource: Porcelain, title: "Porcelain" },
  ];

  const videos = [{ videoId: "tFjfJ95Hdgk?si=JZtAnXvaFeiHTM3G", title: "Satellites - Monitor Sessions" }];

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
      <main className="mx-auto max-w-[1200px] ">
        <h1 className="text-white text-5xl rounded-full flex justify-center">music</h1>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-[1500px] mx-auto">
          {songs.map((song, index) => (
            <MusicBox key={index} imgSource={song.imgSource} title={song.title} />
          ))}
        </section>
        <h1 className="text-white text-5xl justify-center flex">videos</h1>
        <section className="grid grid-cols-1 gap-6 p-6 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <VideoBox key={index} videoId={video.videoId} title={video.title} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
