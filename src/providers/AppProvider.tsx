"use client";

import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";
import { LenisProvider } from "@/hooks/useLenis";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function AppProvider({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <LenisProvider>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          {...themeProps}
        >
          {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </LenisProvider>
  );
}
