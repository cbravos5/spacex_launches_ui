import { styled } from "../../../stitches/stitches.config";

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

  width: '90%',

  p: '10vw 10vw 5vw',

  overflow: 'hidden',

  borderRadius: 15,

  boxShadow:
    '0px 3px 6px rgba(14, 31, 53, 0.08), 0px 6px 12px rgba(14, 31, 53, 0.12), 0px 14px 24px rgba(14, 31, 53, 0.08)',

  '@md': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto',
  }
});

export default LaunchInfoContainer;