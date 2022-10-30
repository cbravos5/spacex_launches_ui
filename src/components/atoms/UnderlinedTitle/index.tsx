import { styled } from "../../../stitches/stitches.config";

const UnderlinedTitle = styled('h1', {
  width: 'fit-content',
  position: 'relative',

  fontSize: 'clamp($titleMobile, 3vw, $titleDesktop)',
  color: '$darkBlue',
  fontWeight: '$medium',

  '&::after': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: 8,
    background: '$darkBlue',
    bottom: -10,
    left: 0,

    '@md': { width: '50%' }
  }
})

export default UnderlinedTitle;