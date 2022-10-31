import { useNavigate } from 'react-router-dom';
import { styled } from '../../../stitches/stitches.config';
import ArrowRight from '../../atoms/ArrowRight';

const Button = styled('button', {
  width: '40vw',
  minWidth: 264,
  py: 10,

  background: '$blueSecondary',

  fontSize: 'clamp($textMobile, 2.5vw, 42px)',
  color: '$light',
  textAlign: 'center',

  cursor: 'pointer',

  position: 'relative',

  borderRadius: '50px',
  border: 'none',

  boxShadow:
    '0px 3px 6px rgba(14, 31, 53, 0.08), 0px 6px 12px rgba(14, 31, 53, 0.12), 0px 14px 24px rgba(14, 31, 53, 0.08)',

  transition: '0.1s ease',

  '&:hover': {
    filter: 'brightness(120%)'
  },

  '&:active': {
    transform: 'scale(0.98)'
  },

  '@md': {  
    width: '35vw',
    py: 15
  },

  '@lg': {
    width: '25vw',
  }
});

const StyledArrowRight = styled(ArrowRight, {
  position: 'absolute',

  aspectRatio: 1,
  height: 'calc(100% + 1px)',

  right: 0,

  top: '-50%',
  transform: 'translate(2px, calc(50% - 1px))',

  fill: '$light'
});

const KnowMoreButton = () => {
  const navigate = useNavigate();


  return (
  <Button onClick={() => navigate("next")}>
    Know more <StyledArrowRight />{' '}
  </Button>
);}

export default KnowMoreButton;
