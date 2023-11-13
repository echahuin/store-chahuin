"use client"
import useMediaQuery from '@mui/material/useMediaQuery';

function useDevice() {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 37.5rem)');
  const isTablet = useMediaQuery('(max-width: 56.25rem)');
  const isDesktop = useMediaQuery('(min-width: 56.25rem)');
  const isMobile = useMediaQuery('(max-width: 37.5rem)');
  const isTabletOrMobile = useMediaQuery('(max-width: 37.5rem)');
  const isBigScreen = useMediaQuery('(min-width: 114rem)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isRetina = useMediaQuery('(min-resolution: 2dppx)');
  return { isTabletOrMobile, isDesktop, isMobile, isTablet, isDesktopOrLaptop, isBigScreen, isPortrait, isRetina };
}
export default useDevice;
