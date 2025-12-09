interface ContactInfoItemProps {
  icon: string;
  label: string;
  value: string;
}

export const ContactInfoItem = ({
  icon,
  label,
  value,
}: ContactInfoItemProps) => {
  return (
    <div className="flex items-center gap-4 min-h-[72px] py-2">
      <div className="text-secondary flex items-center justify-center rounded-xl bg-default shrink-0 size-12">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-muted-foreground text-sm font-normal leading-normal line-clamp-2">
          {label}
        </p>
        <p className="text-white text-base font-medium leading-normal line-clamp-1">
          {value}
        </p>
      </div>
    </div>
  );
};
