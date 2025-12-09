import type { Metadata } from "next";
import { envs } from "@/config/envs";
import { PrivacyPolicy } from "@/containers/privacy-policy";
import { AppConfig } from "@/utils/app-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = envs.BASE_URL || "https://sma-solutions.com";
  const url = `${baseUrl}/${locale === "en" ? "" : locale}/privacy-policy`;

  const title = locale === "vi" ? "Chính Sách Bảo Mật" : "Privacy Policy";
  const description =
    locale === "vi"
      ? "Chính sách bảo mật của SMA Solutions. Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. Cập nhật lần cuối: 26 tháng 10, 2023."
      : "SMA Solutions' privacy policy. We are committed to protecting your privacy and personal information. Last updated: October 26, 2023.";

  return {
    title,
    description,
    keywords: [
      locale === "vi"
        ? "chính sách bảo mật, privacy policy, bảo vệ dữ liệu, quyền riêng tư"
        : "privacy policy, data protection, privacy rights, GDPR",
      AppConfig.name,
    ],
    authors: [{ name: AppConfig.name }],
    creator: AppConfig.name,
    publisher: AppConfig.name,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/privacy-policy`,
        vi: `${baseUrl}/vi/privacy-policy`,
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

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
