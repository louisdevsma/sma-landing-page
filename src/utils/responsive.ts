import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

export const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

// Common breakpoints
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  "2xl": 1400,
  "3xl": 1600,
  "4xl": 1920,
  "5xl": 2560,
} as const;

// Type for breakpoint keys
export type BreakpointKey = keyof typeof breakpoints;

/**
 * Hook to check if device is a mobile device (screen width < 640px)
 * @returns Boolean indicating if screen width is less than sm breakpoint
 * @example
 * const isMobile = useMobile(); // true if width < 768px
 */
export const useMobile = () => useMediaQuery({ maxWidth: breakpoints.md - 1 });

/**
 * Hook to check if device is a tablet (768 <= screen width < 992px)
 * @returns Boolean indicating if screen width is between sm and lg breakpoints
 * @example
 * const isTablet = useTablet(); // true if 768px <= width < 992px
 */
export const useTablet = () =>
  useMediaQuery({ minWidth: breakpoints.md, maxWidth: breakpoints.lg - 1 });

/**
 * Hook to check if device is a desktop (screen width >= 992px)
 * @returns Boolean indicating if screen width is greater than or equal to lg breakpoint
 * @example
 * const isDesktop = useDesktop(); // true if width >= 992px
 */
export const useDesktop = () => useMediaQuery({ minWidth: breakpoints.lg });

/**
 * Hook to check if screen is small (screen width < 768px)
 * @returns Boolean indicating if screen width is less than md breakpoint
 * @example
 * const isSmallScreen = useSmallScreen(); // true if width < 768px
 */
export const useSmallScreen = () =>
  useMediaQuery({ maxWidth: breakpoints.md - 1 });

/**
 * Hook to check if screen is large (screen width >= 1200px)
 * @returns Boolean indicating if screen width is greater than or equal to xl breakpoint
 * @example
 * const isLargeScreen = useLargeScreen(); // true if width >= 1200px
 */
export const useLargeScreen = () => useMediaQuery({ minWidth: breakpoints.xl });

/**
 * Hook to check if screen width is within a specific breakpoint range
 * @param min - Minimum breakpoint key to check (inclusive)
 * @param max - Maximum breakpoint key to check (exclusive)
 * @returns Boolean indicating if screen width is within the specified range
 * @example
 * Check if screen is between sm (576px) and lg (992px) breakpoints
 * const isMediumScreen = useWithinBreakpoint('sm', 'lg');
 */
export const useWithinBreakpoint = (
  min: BreakpointKey,
  max?: BreakpointKey,
) => {
  const minWidth = breakpoints[min];
  const maxWidth = max ? breakpoints[max] - 1 : undefined;

  return useMediaQuery({
    minWidth,
    ...(maxWidth && { maxWidth }),
  });
};

/**
 * Hook to check if screen width is above a specific breakpoint
 * @param breakpoint - Breakpoint key to check
 * @returns Boolean indicating if screen width is above the specified breakpoint
 * @example
 * Check if screen is above md (768px) breakpoint
 * const isAboveMedium = useAboveBreakpoint('md');
 */
export const useAboveBreakpoint = (breakpoint: BreakpointKey) => {
  return useMediaQuery({ minWidth: breakpoints[breakpoint] });
};

/**
 * Hook to check if screen width is below a specific breakpoint
 * @param breakpoint - Breakpoint key to check
 * @returns Boolean indicating if screen width is below the specified breakpoint
 * @example
 * Check if screen is below xl (1280px) breakpoint
 * const isBelowExtraLarge = useBelowBreakpoint('xl');
 */
export const useBelowBreakpoint = (breakpoint: BreakpointKey) => {
  return useMediaQuery({ maxWidth: breakpoints[breakpoint] - 1 });
};

/**
 * Hook to check if screen is a desktop
 * @param children - React node to render if screen is a desktop
 * @param children.children - React node to render if screen is a desktop
 * @returns React node or null
 * @example
 * <Desktop>
 *   <div>Desktop content</div>
 * </Desktop>
 */
export const Desktop = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useDesktop();

  return isDesktop ? children : null;
};

/**
 * Hook to check if screen is a tablet or below
 * @param children - React node to render if screen is a tablet or below
 * @param children.children - React node to render if screen is a tablet or below
 * @returns React node or null
 * @example
 * <TabletAndMobile>
 *   <div>Tablet or mobile content</div>
 * </TabletAndMobile>
 */
export const TabletAndMobile = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isDesktop = useDesktop();

  return !isDesktop ? children : null;
};

/**
 * Hook to check if screen is a tablet
 * @param children - React node to render if screen is a tablet
 * @param children.children - React node to render if screen is a tablet
 * @returns React node or null
 * @example
 * <Tablet>
 *   <div>Tablet content</div>
 * </Tablet>
 */
export const Tablet = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useTablet();

  return isTablet ? children : null;
};

/**
 * Hook to check if screen is a mobile
 * @param children - React node to render if screen is a mobile
 * @param children.children - React node to render if screen is a mobile
 * @returns React node or null
 * @example
 * <Mobile>
 *   <div>Mobile content</div>
 * </Mobile>
 */
export const Mobile = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMobile();

  return isMobile ? children : null;
};

/**
 * Hook to check if screen is a mobile, tablet, or desktop
 * @returns Object containing boolean values for isMobile, isTablet, and isDesktop
 * @example
 * const { isMobile, isTablet, isDesktop } = useResponsive();
 * isMobile: true if screen width < 768px
 * isTablet: true if 768px <= screen width < 992px
 * isDesktop: true if screen width >= 992px
 */
export const useResponsive = () => {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isDesktop = useDesktop();

  return { isMobile, isTablet, isDesktop };
};
