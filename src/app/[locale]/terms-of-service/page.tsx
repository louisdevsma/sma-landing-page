import type { Metadata } from "next";
import { envs } from "@/config/envs";
import { TermsOfService } from "@/containers/terms-of-service";
import { AppConfig } from "@/utils/app-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = envs.BASE_URL || "https://sma-solutions.com";
  const url = `${baseUrl}/${locale === "en" ? "" : locale}/terms-of-service`;

  const title = locale === "vi" ? "Điều Khoản Dịch Vụ " : "Terms of Service ";
  const description =
    locale === "vi"
      ? "Điều khoản và điều kiện sử dụng dịch vụ của SMA Solutions. Cập nhật lần cuối: 26 tháng 10, 2023."
      : "Terms and conditions for using SMA Solutions services. Last updated: October 26, 2023.";

  return {
    title,
    description,
    keywords: [
      locale === "vi"
        ? "điều khoản dịch vụ, terms of service, điều kiện sử dụng, quy định"
        : "terms of service, terms and conditions, legal, user agreement",
      AppConfig.name,
    ],
    authors: [{ name: AppConfig.name }],
    creator: AppConfig.name,
    publisher: AppConfig.name,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/terms-of-service`,
        vi: `${baseUrl}/vi/terms-of-service`,
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
      card: "summary",
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

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
