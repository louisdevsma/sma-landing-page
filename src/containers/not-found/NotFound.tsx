"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

export const NotFound = () => {
  const t = useTranslations();
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-background-dark text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[300px] w-[600px] rounded-full bg-linear-to-r from-primary to-secondary opacity-30 blur-[100px] dark:opacity-20 lg:h-[400px] lg:w-[800px] lg:blur-[150px]"></div>
      </div>
      <div className="relative z-10 flex h-full grow flex-col items-center justify-center p-4">
        <div className="layout-content-container flex flex-col items-center justify-center max-w-[960px] flex-1 text-center">
          <h1 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary sm:text-9xl">
            404
          </h1>
          <div className="mt-6 flex min-w-72 flex-col gap-3">
            <p className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              {t("NotFound.title")}
            </p>
            <p className="text-base font-normal leading-normal text-gray-300 dark:text-gray-400">
              {t("NotFound.description")}
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/">
              <Button
                color="primary"
                size="lg"
                className="font-semibold transition-transform duration-300 hover:scale-105"
              >
                {t("NotFound.returnHome")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
