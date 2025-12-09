"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import { useTransition } from "react";
import { images } from "@/config/images";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  function onSelectChange() {
    const newLocale = locale === "vi" ? "en" : "vi";

    startTransition(() => {
      // usePathname() from next-intl already returns pathname without locale prefix
      // So we can safely use it with router.replace
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <Button
      aria-label="Locale Switcher"
      variant="light"
      size="sm"
      color="default"
      isIconOnly
      isLoading={isPending}
      startContent={
        isPending ? null : locale === "vi" ? (
          <Image src={images.flags.vn} alt="locale-vn" width={20} height={20} />
        ) : (
          <Image src={images.flags.us} alt="locale-us" width={20} height={24} />
        )
      }
      onPress={onSelectChange}
    />
  );
};
