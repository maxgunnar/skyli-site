interface MusicBoxProps {
  imgSource: string;
  title: string;
  className?: string;
}

export default function MusicBox({ imgSource, title, className }: MusicBoxProps) {

  return (
    <article className="questrial-regular grid gap-4 justify-items-center">
      <img src={imgSource} alt="Cover picture" />
      <h2 className="lg:text-3xl text-white uppercase text-2xl">{title}</h2>
      <button className="uppercase text-white border-1 px-2 w-20">Listen</button>
    </article>
  );
}