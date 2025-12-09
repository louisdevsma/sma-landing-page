import type { Metadata } from "next";
import { envs } from "@/config/envs";
import { ProjectDetails } from "@/containers/project-details";
import { getProjectSlugs } from "@/data/projects";
import { AppConfig } from "@/utils/app-config";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const baseUrl = envs.BASE_URL || "https://sma-solutions.com";
  const url = `${baseUrl}/${locale === "en" ? "" : locale}/p/${slug}`;

  // Format slug to readable title
  const projectTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const title =
    locale === "vi" ? `${projectTitle} - Dự Án` : `${projectTitle} - Project`;
  const description =
    locale === "vi"
      ? `Chi tiết về dự án ${projectTitle}. Xem cách chúng tôi tạo ra giải pháp sáng tạo và hiệu quả cho khách hàng.`
      : `Details about ${projectTitle} project. See how we create innovative and effective solutions for our clients.`;

  return {
    title,
    description,
    keywords: [
      locale === "vi"
        ? "dự án, case study, web development, mobile app, thiết kế"
        : "project, case study, web development, mobile app, design",
      projectTitle,
      AppConfig.name,
    ],
    authors: [{ name: AppConfig.name }],
    creator: AppConfig.name,
    publisher: AppConfig.name,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/p/${slug}`,
        vi: `${baseUrl}/vi/p/${slug}`,
      },
    },
    openGraph: {
      type: "article",
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
          alt: projectTitle,
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

export default function ProjectDetailsPage() {
  return <ProjectDetails />;
}
