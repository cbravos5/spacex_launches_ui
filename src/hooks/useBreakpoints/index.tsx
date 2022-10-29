import { screenBreakpoints } from '../../utils/screenBreakpoints';
import useWindowSize from '../useWindowSize';

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