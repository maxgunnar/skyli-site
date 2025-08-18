interface VideoBoxProps {
  videoId: string;   // YouTube-embed-ID
  title: string;
}

export default function VideoBox({ videoId, title }: VideoBoxProps) {
  return (
    <article className="flex flex-col items-center gap-4">
      <div className="w-full aspect-video border-3 border-white">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-white text-2xl">{title}</h2>
    </article>
  );
}