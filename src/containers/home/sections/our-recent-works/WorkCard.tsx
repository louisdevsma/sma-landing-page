import Image from "next/image";
import { paths } from "@/config/paths";
import { Link } from "@/i18n/navigation";

interface WorkCardProps {
  title: string;
  url: string;
  slug: string;
}

export const WorkCard = ({ title, url, slug }: WorkCardProps) => {
  return (
    <div className="group relative aspect-video w-full h-auto overflow-hidden rounded-xl">
      <Image
        placeholder="blur"
        loading="lazy"
        blurDataURL={url}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-105"
        data-alt={title}
        src={url}
      />
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-500 max-md:opacity-100 md:group-hover:opacity-100">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <Link
          className="mt-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm max-md:bg-white/30 md:group-hover:bg-white/30"
          href={`${paths.projects}${slug}`}
        >
          View Project
        </Link>
      </div>
    </div>
  );
};
