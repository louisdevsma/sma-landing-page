interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
  showDetails?: boolean;
}

export const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <div className="w-full h-full justify-center flex flex-1 transform flex-col gap-2 rounded-xl border border-transparent bg-default p-6 transition-all relative cursor-pointer">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center size-12 rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold leading-tight text-white">
            {title}
          </h3>
          <p className="text-sm max-[360px]:line-clamp-4 font-normal leading-normal text-muted">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
