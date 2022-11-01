import { styled } from "../../../stitches/stitches.config";

const StyledButton = styled('button', {
  fontSize: 'clamp($textMobile, 1.5vw, 25px)',
  background: '$blueMain',
  color: '$light',
  textAlign: 'center',
  p: 10,
  border: 'none',
  borderRadius: 10,

  transition: '0.1s ease',

  cursor: 'pointer',

  mt: 50,

  '&:hover': { filter: 'brightness(80%)' },

  '&:active': { transform: 'scale(0.98)' }
});

const LoadMore = ({...props}) => <StyledButton {...props}>Load More</StyledButton>

export default LoadMore;