import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Footer, Header, Mask, Particles } from "@/components";
import { envs } from "@/config/envs";
import { routing } from "@/i18n/routing";
import { AppProvider } from "@/providers/AppProvider";
import { AppConfig } from "@/utils/app-config";

const baseUrl = envs.BASE_URL || "https://sma-solutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: AppConfig.name,
    template: `%s | ${AppConfig.name}`,
  },
  description: AppConfig.description,
  keywords: [
    "web development",
    "mobile apps",
    "cloud solutions",
    "UI/UX design",
    "IT services",
    "phát triển web",
    "ứng dụng mobile",
    "giải pháp cloud",
    AppConfig.name,
  ],
  authors: [{ name: AppConfig.name }],
  creator: AppConfig.name,
  publisher: AppConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      { url: "/assets/favicon/favicon.ico" },
    ],
    apple: [
      {
        url: "/assets/favicon/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/assets/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
  manifest: "/assets/favicon/manifest.json",
  alternates: {
    canonical: baseUrl,
    languages: {
      en: `${baseUrl}/en`,
      vi: `${baseUrl}/vi`,
      "x-default": baseUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: AppConfig.name,
    title: AppConfig.name,
    description: AppConfig.description,
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
    description: AppConfig.description,
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html suppressHydrationWarning lang={locale}>
      <body suppressHydrationWarning className="relative">
        <Script
          src="/assets/js/tsparticles.slim.bundle.min.js"
          strategy="afterInteractive"
        />
        <NextIntlClientProvider>
          <AppProvider
            themeProps={{ attribute: "class", defaultTheme: "dark" }}
          >
            <main className="bg-background-dark min-h-screen h-min flex flex-col relative p-0 items-center overflow-clip w-auto">
              <Particles />
              <Header />
              {children}
              <Footer />
              <Mask />
            </main>
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
