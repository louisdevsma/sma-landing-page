"use client";

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import type { FC } from "react";

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Button
      aria-label="Theme Switcher"
      variant="light"
      size="sm"
      color="default"
      isIconOnly
      startContent={
        theme === "dark" ? (
          <Icon
            icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition"
            width={16}
            height={16}
          />
        ) : (
          <Icon
            icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
            width={16}
            height={16}
          />
        )
      }
      onPress={onChange}
    />
  );
};
