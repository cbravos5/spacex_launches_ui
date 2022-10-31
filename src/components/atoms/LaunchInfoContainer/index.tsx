import { keyframes, styled } from "../../../stitches/stitches.config";

const fadeIn = keyframes({
  to: { opacity: 1 },
});

const LaunchInfoContainer = styled('div', {
  position: 'relative',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'repeat(5, 1fr)',
  columnGap: '2vw',
  rowGap: '5vw',
  justifyItems: 'center',
  alignItems: 'center',
  
  background: '$light',

  width: '100%',

  p: '10vw 10vw 5vw',

  overflow: 'hidden',

  borderRadius: 15,

  opacity: 0,

  boxShadow:
    '0px 3px 6px rgba(14, 31, 53, 0.08), 0px 6px 12px rgba(14, 31, 53, 0.12), 0px 14px 24px rgba(14, 31, 53, 0.08)',

  animation: `${fadeIn} 0.3s 0.5s forwards`,

  '@md': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto',
  },

  variants: {
    small: {
      true: {
        columnGap: '1vw',
        rowGap: '3vw',
        p: '6vw 4vw 2vw',

        '@md': {
          rowGap: '2vw',
        },
      }
    }
  }
});

export default LaunchInfoContainer;