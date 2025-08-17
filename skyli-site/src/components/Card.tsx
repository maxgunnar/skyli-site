import clsx from "clsx";

interface CardProps {
  content?: string;
  img?: string;
  className?: string;
}

export default function Card({ content, className, img = "" }: CardProps) {
  if (img && !content) {
    // Cards with images only
    return (
      <figure className={clsx("flex justify-center items-center h-full overflow-hidden p-4 sm:p-6 md:p-8 rounded-lg", className)}>
        <img src={img} alt="Illustration" className="max-w-full h-40 sm:h-48 md:h-auto object-contain" />
      </figure>
    );
  }

  // Cards with text content
  return (
    <article className={clsx("flex flex-col justify-center h-full p-4 sm:p-6 md:p-8 text-center text-black rounded-lg overflow-hidden", className)}>
      {content && <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed break-words">{content}</p>}
      {img && (
        <figure className="mt-4 flex justify-center items-center">
          <img src={img} alt="Illustration" className="max-w-full h-40 sm:h-48 md:h-auto object-contain" />
        </figure>
      )}
    </article>
  );
}
