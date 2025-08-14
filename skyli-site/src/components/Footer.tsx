import footerVector from "../assets/footer-vector.png";
import { Spotify, Tiktok, Instagram, Youtube, Facebook } from "grommet-icons";

export default function Footer() {
  return (
    <footer className=" text-white my-12 flex flex-col justify-center items-center">
      <div className="">
        <img src={footerVector} alt="vector" className="w-[100vw]" />
      </div>
      <div className="flex gap-4">
        <a href="https://open.spotify.com/artist/48A3DvHsdcfA9Ethck3DcI?si=OoRht61XRG-cktxbLA4HIw" target="_blank" rel="noopener noreferrer">
          <Spotify color="white" />
        </a>
        <a href="https://www.tiktok.com/@imskyli?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
          <Tiktok color="white" />
        </a>
        <a href="https://www.instagram.com/skylimusic/" target="_blank" rel="noopener noreferrer">
          <Instagram color="white" />
        </a>
        <a href="https://youtube.com/@sky-li_music?feature=shared" target="_blank" rel="noopener noreferrer">
          <Youtube color="white" />
        </a>
        <a href="https://www.facebook.com/skylimusic" target="_blank" rel="noopener noreferrer">
          <Facebook color="white" />
        </a>
      </div>
    </footer>
  );
}
