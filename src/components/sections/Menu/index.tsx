import useBreakpoints from '../../../hooks/useBreakpoints';
import { styled } from '../../../stitches/stitches.config';
import { Box } from '../../atoms/Box';
import Nav from '../../atoms/Nav';
import FlyingRocket from '../../molecules/FlyingRocket';
import RoundedContainer from '../../molecules/RoundedContainer';

const MenuBox = styled('section', {
  position: 'fixed',
  top: 0,

  width: '100vw',
  height: '5vw',
  minHeight: '48px',

  background: '$blueMain',

  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',

  zIndex: 3,
});

const Menu = () => {
  return (
    <MenuBox>
      <Box
        css={{ display: 'flex', justifyContent: 'space-around', width: '40%' }}
      >
        <Nav to='' delay={0}>Upcoming</Nav>
        <Nav to='next' delay={1}>Next</Nav>
      </Box>

      <RoundedContainer />
      <FlyingRocket animate />

      <Box
        css={{ display: 'flex', justifyContent: 'space-around', width: '40%' }}
      >
        <Nav to='' delay={2}>Latest</Nav>
        <Nav to='' delay={3}>Previous</Nav>
      </Box>
    </MenuBox>
  );
};

export default Menu;
