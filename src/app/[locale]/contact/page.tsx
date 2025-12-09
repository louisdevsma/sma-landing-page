import type { Metadata } from "next";
import { envs } from "@/config/envs";
import { Contact } from "@/containers/contact";
import { AppConfig } from "@/utils/app-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = envs.BASE_URL || "https://sma-solutions.com";
  const url = `${baseUrl}/${locale === "en" ? "" : locale}/contact`;

  const title = locale === "vi" ? "Liên Hệ" : "Contact Us";
  const description =
    locale === "vi"
      ? "Liên hệ với chúng tôi để được tư vấn về các giải pháp web, mobile và cloud phù hợp với nhu cầu doanh nghiệp của bạn."
      : "Get in touch with us to discuss web, mobile, and cloud solutions tailored to your business needs.";

  return {
    title,
    description,
    keywords: [
      locale === "vi"
        ? "liên hệ, tư vấn, hỗ trợ khách hàng, báo giá, dịch vụ IT"
        : "contact, consultation, customer support, quote, IT services",
      AppConfig.name,
    ],
    authors: [{ name: AppConfig.name }],
    creator: AppConfig.name,
    publisher: AppConfig.name,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/contact`,
        vi: `${baseUrl}/vi/contact`,
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

export default function ContactPage() {
  return <Contact />;
}
