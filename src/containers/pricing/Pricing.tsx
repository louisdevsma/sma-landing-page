import {
  PricingCardsList,
  PricingCTA,
  PricingFAQ,
  PricingHeader,
} from "./components";

interface PricingPlan {
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
}

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface PricingProps {
  header?: {
    title: string;
    titleHighlight?: string;
    description: string;
  };
  plans?: PricingPlan[];
  faq?: {
    title: string;
    items: FAQItem[];
  };
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
  };
}

const defaultHeader = {
  title: "Transparent Pricing for",
  titleHighlight: "Every Business",
  description:
    "Choose the perfect plan that fits your needs. No hidden fees, just pure performance and dedicated support.",
};

const defaultPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$99",
    priceUnit: "/month",
    buttonText: "Get Started",
    buttonVariant: "default",
    features: [
      "Core IT Infrastructure",
      "Basic Security Suite",
      "24/7 Email Support",
      "100GB Cloud Storage",
    ],
  },
  {
    name: "Professional",
    price: "$299",
    priceUnit: "/month",
    buttonText: "Choose Plan",
    buttonVariant: "gradient",
    features: [
      "Advanced SMA Solutions",
      "Enhanced Security Suite",
      "Priority Phone & Email Support",
      "1TB Cloud Storage",
      "Dedicated Account Manager",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    customPrice: {
      main: "Contact Us",
      sub: "for a custom quote",
    },
    buttonText: "Contact Sales",
    buttonVariant: "default",
    features: [
      "Custom Enterprise Solutions",
      "Comprehensive Security & Compliance",
      "Dedicated 24/7 Support Line",
      "Unlimited Cloud Storage",
      "Service Level Agreement (SLA)",
    ],
  },
];

const defaultFAQ = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "What are the payment and refund policies?",
      answer:
        "We accept all major credit cards and bank transfers. We offer a 30-day money-back guarantee on all plans if you are not satisfied with our service.",
      isOpen: true,
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time from your account dashboard. Changes will be prorated for the current billing cycle.",
    },
    {
      question: "What is the main difference between the plans?",
      answer:
        "The main differences are in the level of support, storage capacity, and access to advanced features. The Professional plan is our most popular for growing businesses, while the Enterprise plan offers custom solutions for large-scale operations.",
    },
    {
      question: "What kind of support is included?",
      answer:
        "Support levels vary by plan. The Starter plan includes 24/7 email support. The Professional plan adds priority phone support, and the Enterprise plan includes a dedicated 24/7 support line and a dedicated account manager.",
    },
  ],
};

const defaultCTA = {
  title: "Still have questions?",
  description:
    "Can't find the answer you're looking for? Don't hesitate to reach out to our team for a custom solution tailored to your business needs.",
  buttonText: "Contact Us",
};

export const Pricing = ({
  header = defaultHeader,
  plans = defaultPlans,
  faq = defaultFAQ,
  cta = defaultCTA,
}: PricingProps = {}) => {
  return (
    <section className="py-16 md:py-24 w-full relative z-10">
      <div className="sma-container flex flex-col items-center gap-12 text-center md:gap-16">
        <PricingHeader
          title={header.title}
          titleHighlight={header.titleHighlight}
          description={header.description}
        />
        <PricingCardsList plans={plans} />
        <PricingFAQ title={faq.title} items={faq.items} />
        <PricingCTA
          title={cta.title}
          description={cta.description}
          buttonText={cta.buttonText}
          onButtonClick={cta.onButtonClick}
        />
      </div>
    </section>
  );
};
