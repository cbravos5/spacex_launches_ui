import { keyframes, styled } from '../../../stitches/stitches.config';

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0, height: 0, display: 'none' },
});

const DecoyBackground = styled('div', {
  background: '$blueMain',

  width: '100vw',

  variants: {
    animate: {
      true: {
        position: 'absolute',

        zIndex: 2,

        height: '100vh',

        pointerEvents: 'none',

        animation: `${fadeOut} 600ms 2.2s forwards`,
      },
      false: {
        height: 0,
        display: 'none',
      },
    },
  },
});

export default DecoyBackground;
