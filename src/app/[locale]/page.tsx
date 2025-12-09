import type { Metadata } from "next";
import { envs } from "@/config/envs";
import { Home } from "@/containers/home";
import { AppConfig } from "@/utils/app-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = envs.BASE_URL || "https://sma-solutions.com";
  const url = `${baseUrl}/${locale === "en" ? "" : locale}`;

  return {
    title: {
      default: locale === "en" ? "Home" : "Trang Chủ",
      template: `%s | ${AppConfig.name}`,
    },
    description:
      locale === "vi"
        ? "Chúng tôi chuyên tạo ra các giải pháp web, mobile và cloud tùy chỉnh giúp thúc đẩy tăng trưởng và đổi mới cho doanh nghiệp của bạn."
        : "We specialize in crafting bespoke web, mobile, and cloud solutions that drive growth and innovation for your business.",
    keywords: [
      locale === "vi"
        ? "phát triển web, ứng dụng mobile, giải pháp cloud, thiết kế UI/UX, công nghệ thông tin"
        : "web development, mobile apps, cloud solutions, UI/UX design, IT services",
      AppConfig.name,
    ],
    authors: [{ name: AppConfig.name }],
    creator: AppConfig.name,
    publisher: AppConfig.name,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en`,
        vi: `${baseUrl}/vi`,
        "x-default": baseUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      url,
      siteName: AppConfig.name,
      title: AppConfig.name,
      description:
        locale === "vi"
          ? "Chúng tôi chuyên tạo ra các giải pháp web, mobile và cloud tùy chỉnh giúp thúc đẩy tăng trưởng và đổi mới cho doanh nghiệp của bạn."
          : "We specialize in crafting bespoke web, mobile, and cloud solutions that drive growth and innovation for your business.",
      images: [
        {
          url: `${baseUrl}/assets/images/logo-light-rounded.svg`,
          width: 1200,
          height: 630,
          alt: AppConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: AppConfig.name,
      description:
        locale === "vi"
          ? "Chúng tôi chuyên tạo ra các giải pháp web, mobile và cloud tùy chỉnh giúp thúc đẩy tăng trưởng và đổi mới cho doanh nghiệp của bạn."
          : "We specialize in crafting bespoke web, mobile, and cloud solutions that drive growth and innovation for your business.",
      images: [`${baseUrl}/assets/images/logo-light-rounded.svg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function HomePage() {
  return <Home />;
}
