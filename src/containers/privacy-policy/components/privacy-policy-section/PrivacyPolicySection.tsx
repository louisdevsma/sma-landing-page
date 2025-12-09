interface PrivacyPolicySectionProps {
  id: string;
  title: string;
  content: string;
}

export const PrivacyPolicySection = ({
  id,
  title,
  content,
}: PrivacyPolicySectionProps) => {
  return (
    <div className="space-y-4 scroll-mt-24" id={id}>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
        {title}
      </h2>
      <p className="text-white/80 text-base font-normal leading-relaxed">
        {content}
      </p>
    </div>
  );
};
