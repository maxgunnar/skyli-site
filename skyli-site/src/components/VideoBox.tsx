// components/VideoBox.tsx
import { toYouTubeId } from "../types";

interface VideoBoxProps {
  title: string;
  videoId: string; // can be ID or URL, we normalize
}

export default function VideoBox({ title, videoId }: VideoBoxProps) {
  const id = toYouTubeId(videoId);
  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <article className="relative w-full aspect-video">
      <iframe
        className="w-full h-full rounded-xl"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </article>
  );
}
