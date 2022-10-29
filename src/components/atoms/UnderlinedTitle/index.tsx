import { styled } from "../../../stitches/stitches.config";

const UnderlinedTitle = styled('h1', {
  width: 'fit-content',
  position: 'relative',

  fontSize: '55px',
  color: '$darkBlue',
  fontWeight: '$medium',

  '&::after': {
    content: '',
    position: 'absolute',
    width: '50%',
    height: 8,
    background: '$darkBlue',
    bottom: -10,
    left: 0
  }
})

export default UnderlinedTitle;