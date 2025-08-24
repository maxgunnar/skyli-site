import Navbar from "../components/Navbar";
import { navLinks } from "../data/navLinks";
import { songs } from "../data/songs";
import { videos } from "../data/videos";
import MyLogoWhite from "../assets/logo-font-white.svg";
import MoonLogoWhite from "../assets/moon-logo-white.svg";
import Footer from "../components/Footer";
import MusicBox from "../components/MusicBox";
import VideoBox from "../components/VideoBox";

export default function Music() {
  return (
    <div>
      <Navbar logo={MyLogoWhite} menuIcon={MoonLogoWhite} links={navLinks} className="relative z-20 bg-transparent" />
      <main className="mx-auto max-w-[1200px]">
        <h1 className="text-white text-5xl rounded-full flex justify-center">music</h1>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-[1500px] mx-auto">
          {songs.map((song) => (
            <MusicBox key={song.id} imgSource={song.imgSource} title={song.title} spotifyUrl={song.spotifyUrl} />
          ))}
        </section>
        <h1 className="text-white text-5xl justify-center flex">videos</h1>
        <section className="grid grid-cols-1 gap-6 p-6 max-w-6xl mx-auto">
          {videos.map((video) => (
            <VideoBox key={video.id} videoId={video.videoId} title={video.title} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
