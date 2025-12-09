import { motion } from "framer-motion";
import { PricingFeature } from "../pricing-feature";

interface PricingCardProps {
  name: string;
  price?: string;
  priceUnit?: string;
  customPrice?: {
    main: string;
    sub: string;
  };
  buttonText: string;
  buttonVariant?: "default" | "gradient";
  features: string[];
  isPopular?: boolean;
  className?: string;
}

export const PricingCard = ({
  name,
  price,
  priceUnit,
  customPrice,
  buttonText,
  buttonVariant = "default",
  features,
  isPopular = false,
  className = "",
}: PricingCardProps) => {
  const cardClassName = isPopular
    ? `gradient-border-card flex flex-1 flex-col gap-6 rounded-xl bg-background-dark p-6 text-left ${className}`
    : `flex flex-1 flex-col gap-6 rounded-xl border border-solid border-white/10 bg-white/5 p-6 text-left ${className}`;

  const buttonClassName =
    buttonVariant === "gradient"
      ? "flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-linear-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
      : "flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-colors";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  };

  return (
    <div className={cardClassName}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold leading-tight text-white">{name}</h3>
          {isPopular && (
            <p className="rounded-full bg-linear-to-r from-primary to-secondary px-3 py-1 text-xs font-medium leading-normal tracking-[0.015em] text-white">
              Most Popular
            </p>
          )}
        </div>
        {customPrice ? (
          <p className="flex flex-col items-start gap-1 text-white">
            <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
              {customPrice.main}
            </span>
            <span className="text-sm font-bold leading-tight text-white/70">
              {customPrice.sub}
            </span>
          </p>
        ) : (
          <p className="flex items-baseline gap-1 text-white">
            <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
              {price}
            </span>
            {priceUnit && (
              <span className="text-base font-bold leading-tight text-white/70">
                {priceUnit}
              </span>
            )}
          </p>
        )}
      </div>
      <button type="button" className={`${buttonClassName}`}>
        <span className="truncate">{buttonText}</span>
      </button>
      <motion.div
        className="flex flex-col gap-3"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <PricingFeature feature={feature} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
