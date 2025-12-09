import Link from "next/link";

interface ProjectCardProps {
  title: string;
  url: string;
  slug: string;
  category: string;
  description: string;
}

export const ProjectCard = ({
  title,
  url,
  slug,
  category,
  description,
}: ProjectCardProps) => {
  return (
    <div className="group flex flex-col gap-3 rounded-xl bg-white/5 p-4 border border-transparent hover:border-primary transition-all duration-300">
      <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
          data-alt={title}
          style={{
            backgroundImage: `url('${url}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 max-md:bg-white/30 md:group-hover:bg-white/30"
            href={slug}
          >
            View Project
          </Link>
        </div>
      </div>
      <div>
        <span className="inline-block bg-primary/20 text-secondary text-xs font-medium px-2 py-1 rounded-full mb-2">
          {category}
        </span>
        <p className="text-white text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};
