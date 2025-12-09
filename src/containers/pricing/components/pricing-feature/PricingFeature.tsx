interface PricingFeatureProps {
  feature: string;
}

export const PricingFeature = ({ feature }: PricingFeatureProps) => {
  return (
    <div className="flex items-center gap-3 text-[13px] font-normal leading-normal text-white/90">
      <span className="material-symbols-outlined text-lg text-primary">
        check_circle
      </span>
      {feature}
    </div>
  );
};
