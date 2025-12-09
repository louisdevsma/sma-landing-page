import type { Metadata } from "next";
import { envs } from "@/config/envs";
import { Pricing } from "@/containers/pricing";
import { AppConfig } from "@/utils/app-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const baseUrl = envs.BASE_URL || "https://sma-solutions.com";
  const url = `${baseUrl}/${locale === "en" ? "" : locale}/pricing/${slug}`;

  const title = locale === "vi" ? "Bảng Giá" : "Pricing Plans";
  const description =
    locale === "vi"
      ? "Chọn gói dịch vụ phù hợp với nhu cầu của bạn. Giá cả minh bạch, không phí ẩn, chỉ có hiệu suất thuần túy và hỗ trợ tận tâm."
      : "Choose the perfect plan that fits your needs. No hidden fees, just pure performance and dedicated support.";

  return {
    title,
    description,
    keywords: [
      locale === "vi"
        ? "bảng giá, gói dịch vụ, pricing, đăng ký, subscription"
        : "pricing, plans, subscription, packages, rates",
      AppConfig.name,
    ],
    authors: [{ name: AppConfig.name }],
    creator: AppConfig.name,
    publisher: AppConfig.name,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/pricing/${slug}`,
        vi: `${baseUrl}/vi/pricing/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      url,
      siteName: AppConfig.name,
      title,
      description,
      images: [
        {
          url: `${baseUrl}/assets/images/logo-light-rounded.svg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/assets/images/logo-light-rounded.svg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PricingPage() {
  return <Pricing />;
}
