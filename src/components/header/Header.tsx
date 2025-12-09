"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import Image from "next/image";
import { type CSSProperties, useCallback, useMemo, useState } from "react";
import { images } from "@/config/images";
import { paths } from "@/config/paths";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SmoothScrollLink } from "../animate";
import { LocaleSwitcher } from "../locale-switcher";
import { ServicesSelection } from "../services-selection";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesSelectionOpen, setIsServicesSelectionOpen] = useState(false);

  const isHome = pathname === paths.home;
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleOpenServicesSelection = useCallback(() => {
    setIsServicesSelectionOpen(true);
    setIsMenuOpen(false);
  }, []);

  const renderMenuItemContent = useCallback(
    (item: MenuItem) => {
      if (item.label === "Services") {
        if (isHome) {
          return (
            <SmoothScrollLink
              href={item.href}
              className="w-full text-muted-light hover:text-white text-sm font-medium leading-normal transition-colors"
            >
              {item.label}
            </SmoothScrollLink>
          );
        }

        return (
          <button
            type="button"
            aria-label="Open services selection"
            className="w-full text-left text-muted-light hover:text-white text-sm font-medium leading-normal transition-colors cursor-pointer bg-transparent"
            onClick={handleOpenServicesSelection}
          >
            {item.label}
          </button>
        );
      }

      return (
        <Link
          href={item.href}
          className="w-full text-muted-light hover:text-white text-sm font-medium leading-normal transition-colors"
        >
          {item.label}
        </Link>
      );
    },
    [handleOpenServicesSelection, isHome]
  );

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          base: "mt-5 top-5 backdrop-blur rounded-[100px] w-[calc(100%-20px)] lg:max-w-[800px] mx-auto bg-background-dark/20 border border-background-light/20",
          wrapper: "px-3 md:px-5",
        }}
      >
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle
            onToggle={handleMenuToggle}
            className="text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent
          className="md:hidden pr-3 flex-shrink-0p"
          justify="center"
        >
          <NavbarBrand>
            <Link href="/">
              <Image
                src={images.logo.dark}
                alt="sma-solutions-logo"
                width={48}
                height={48}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4 flex-1" justify="center">
          <NavbarBrand>
            <Link href="/">
              <Image
                src={images.logo.dark}
                alt="sma-solutions-logo"
                width={48}
                height={48}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex gap-8 flex-auto"
          justify="center"
        >
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem
                key={`${item}-${index}`}
                isActive={isActive}
                className="text-muted-light hover:text-white text-sm font-medium leading-normal transition-colors relative data-[active=true]:text-white data-[active=true]:after:content-[''] data-[active=true]:after:absolute data-[active=true]:after:bottom-[-4px] data-[active=true]:after:left-0 data-[active=true]:after:w-full data-[active=true]:after:h-[2px] data-[active=true]:after:bg-primary"
              >
                {renderMenuItemContent(item)}
              </NavbarItem>
            );
          })}
        </NavbarContent>

        <NavbarContent className="flex-1" justify="end">
          {/* <NavbarItem className="hidden md:flex">
            <Button size="sm" color="primary">
              Start a Project
            </Button>
          </NavbarItem> */}
          <NavbarItem>
            <LocaleSwitcher />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu
          style={{ "--navbar-height": "5.5rem" } as CSSProperties}
          className="p-3 md:p-5 bg-background-dark/20 w-[calc(100%-20px)] lg:max-w-[1200px] mx-auto rounded-t-lg"
        >
          <NavbarContent className="flex flex-col">
            {menuItems.map((item, index) => (
              <NavbarMenuItem
                key={`${item}-${index}`}
                isActive={index === 0}
                className="relative data-[active=true]:text-white data-[active=true]:after:content-[''] data-[active=true]:after:absolute data-[active=true]:after:bottom-[-4px] data-[active=true]:after:left-0 data-[active=true]:after:w-full data-[active=true]:after:h-[2px] data-[active=true]:after:bg-primary"
              >
                {renderMenuItemContent(item)}
              </NavbarMenuItem>
            ))}
          </NavbarContent>

          <NavbarItem>
            <p className="text-center text-white text-xs font-medium leading-normal">
              Copyright © {currentYear} SMA Solutions. All rights reserved.
            </p>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
      <ServicesSelection
        isOpen={isServicesSelectionOpen}
        onOpenChange={setIsServicesSelectionOpen}
      />
    </>
  );
};
