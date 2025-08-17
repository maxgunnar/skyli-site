import footerVector from "../assets/footer-vector.png";
import { Spotify, Tiktok, Instagram, Youtube, Facebook } from "grommet-icons";

export default function Footer() {
  return (
    <footer aria-label="Site footer with social media links" className="text-white mt-12 flex flex-col items-center">
      <img src={footerVector} alt="" aria-hidden="true" className="w-full" />

      <nav aria-label="Social media links" className="flex gap-6 mt-4 flex-wrap justify-center">
        <a href="https://open.spotify.com/artist/48A3DvHsdcfA9Ethck3DcI?si=OoRht61XRG-cktxbLA4HIw" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <Spotify color="white" />
          <span className="sr-only">Spotify</span>
        </a>

        <a href="https://www.tiktok.com/@imskyli?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <Tiktok color="white" />
          <span className="sr-only">TikTok</span>
        </a>

        <a href="https://www.instagram.com/skylimusic/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <Instagram color="white" />
          <span className="sr-only">Instagram</span>
        </a>

        <a href="https://youtube.com/@sky-li_music?feature=shared" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <Youtube color="white" />
          <span className="sr-only">YouTube</span>
        </a>

        <a href="https://www.facebook.com/skylimusic" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <Facebook color="white" />
          <span className="sr-only">Facebook</span>
        </a>
      </nav>

      <p className="mt-6 mb-6 text-sm text-gray-300 text-center">&copy; {new Date().getFullYear()} Sky Li. All rights reserved.</p>
    </footer>
  );
}
