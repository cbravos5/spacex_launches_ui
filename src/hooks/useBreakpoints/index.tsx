import useWindowSize from 'hooks/useWindowSize';
import { screenBreakpoints } from 'utils/screenBreakpoints';

// Hook
export default function useHideElement() {
  const { width } = useWindowSize();

  const isSmScreen = !!width && width > screenBreakpoints.sm;
  const isMdScreen = !!width && width > screenBreakpoints.md;
  const isLgScreen = !!width && width > screenBreakpoints.lg;

  return {
    isSmScreen,
    isMdScreen,
    isLgScreen,
  };
}