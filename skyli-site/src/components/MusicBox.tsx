interface MusicBoxProps {
  imgSource: string;
  title: string;
  spotifyUrl: string;
  className?: string;
}

export default function MusicBox({ imgSource, title, spotifyUrl, className }: MusicBoxProps) {
  return (
    <article className={`questrial-regular grid gap-4 justify-items-center ${className ?? ""}`}>
      <img src={imgSource} alt={`${title} cover`} />
      <h2 className="lg:text-3xl text-white uppercase text-2xl">{title}</h2>

      <a
        href={spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Listen to ${title} on Spotify`}
        className="
  relative overflow-hidden
  uppercase text-white border border-white px-2 py-1 w-20 text-center
  shadow-xl transition-all cursor-pointer hover:scale-110
  before:absolute before:right-0 before:top-0 before:h-12 before:w-6
  before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10
  before:duration-1000 hover:before:-translate-x-40
"
      >
        Listen
      </a>
    </article>
  );
}
