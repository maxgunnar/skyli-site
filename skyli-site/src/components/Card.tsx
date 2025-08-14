import clsx from "clsx";

interface CardProps {
  content?: string;
  img?: string;
  className?: string;
}

export default function Card({ content, className, img = "" }: CardProps) {
  return <div className={clsx("text-black text-center", className)}>{content ? <p className="text-4xl mb-6">{content}</p> : img ? <img src={img} alt="{img}" className="mx-auto" /> : null}</div>;
}
