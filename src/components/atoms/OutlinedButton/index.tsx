import { styled } from "../../../stitches/stitches.config";

const OutlinedButton = styled('a', {
  position: 'relative',
  
  background: 'transparent',

  cursor: 'pointer',
  
  boxShadow: '0 0 0 1px #007EA7',
  borderRadius: '100px',
  
  textDecoration: 'none',
  textAlign: 'center',
  fontSize: 'clamp($textMobile, 1.5vw, $textDesktop)',
  color: '$blueSecondary',

  height: '3vw',
  minHeight: '25px',

  p: '2px 15px 2px 2px',

  transition: '0.1s ease',

  '&:hover': { 
    background: '#007da739',
  }
});

export default OutlinedButton;