import type { Metadata } from "next";
import { envs } from "@/config/envs";
import { Projects } from "@/containers/projects";
import { AppConfig } from "@/utils/app-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = envs.BASE_URL || "https://sma-solutions.com";
  const url = `${baseUrl}/${locale === "en" ? "" : locale}/projects`;

  const title = locale === "vi" ? "Dự Án" : "Our Projects";
  const description =
    locale === "vi"
      ? "Khám phá các dự án nổi bật của chúng tôi. Xem cách các giải pháp của chúng tôi nâng tầm thương hiệu, thúc đẩy tăng trưởng và mang lại kết quả thực tế cho khách hàng."
      : "Discover our standout projects. See how our solutions elevate brands, accelerate growth, and bring real results to our clients.";

  return {
    title,
    description,
    keywords: [
      locale === "vi"
        ? "dự án, portfolio, case study, web development, mobile apps, thiết kế website"
        : "projects, portfolio, case study, web development, mobile apps, website design",
      AppConfig.name,
    ],
    authors: [{ name: AppConfig.name }],
    creator: AppConfig.name,
    publisher: AppConfig.name,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/projects`,
        vi: `${baseUrl}/vi/projects`,
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
          url: `${baseUrl}/assets/images/projects/project_mockup_1.webp`,
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
      images: [`${baseUrl}/assets/images/projects/project_mockup_1.webp`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProjectsPage() {
  return <Projects />;
}
