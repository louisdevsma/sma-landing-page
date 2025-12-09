interface ContactHeaderProps {
  title: string;
  description: string;
}

export const ContactHeader = ({ title, description }: ContactHeaderProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className="flex flex-col gap-3 max-w-xl">
        <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] font-display gradient-text">
          {title}
        </h1>
        <p className="text-[#9d9db9] text-base md:text-lg font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
