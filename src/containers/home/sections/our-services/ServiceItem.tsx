interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <div className="group flex flex-1 transform flex-col gap-2 rounded-xl border border-transparent bg-default p-6 transition-all hover:-translate-y-1 hover:border-primary relative cursor-pointer">
      <div className="flex-auto flex flex-col gap-4">
        <div className="flex items-center justify-center size-12 rounded-lg bg-linear-to-br from-primary to-secondary text-white">
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold leading-tight text-white">
            {title}
          </h3>
          <p className="text-sm font-normal leading-normal text-muted">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-1.5">
        <span className="text-sm font-medium leading-normal text-primary md:opacity-0 md:translate-x-3 transition-all duration-300 ease-out md:group-hover:opacity-100 md:group-hover:translate-x-0">
          View details
        </span>
        <span className="material-symbols-outlined text-primary transition-transform duration-300 ease-out group-hover:translate-x-0 translate-x-1">
          line_end_arrow_notch
        </span>
      </div>
    </div>
  );
};
