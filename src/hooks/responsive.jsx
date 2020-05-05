import { useWindowSize } from 'react-use';

export const MOBILE_MIN_WIDTH = 480;
export const TABLET_MIN_WIDTH = 768;
export const DESKTOP_MIN_WIDTH = 992;
export const LARGE_DESKTOP_MIN_WIDTH = 1280;

export const BREAKPOINTS = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const useResponsive = () => {
  const { width } = useWindowSize();

  if (width < MOBILE_MIN_WIDTH) {
    return BREAKPOINTS.xs;
  }
  if (width >= MOBILE_MIN_WIDTH && width < TABLET_MIN_WIDTH) {
    return BREAKPOINTS.sm;
  }
  if (width >= TABLET_MIN_WIDTH && width < DESKTOP_MIN_WIDTH) {
    return BREAKPOINTS.md;
  }
  if (width >= DESKTOP_MIN_WIDTH && width < LARGE_DESKTOP_MIN_WIDTH) {
    return BREAKPOINTS.lg;
  }

  // otherwise: width >= LARGE_DESKTOP_MIN_WIDTH
  return BREAKPOINTS.xl;
};

export default useResponsive;