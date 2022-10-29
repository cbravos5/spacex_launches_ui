import { styled } from "../../../stitches/stitches.config";
import { Box } from "../../atoms/Box";
import Nav from "../../atoms/Nav";
import FlyingRocket from "../../molecules/FlyingRocket";
import RoundedContainer from "../../molecules/RoundedContainer";

const MenuBox = styled('section', {
  position: 'fixed',
  top: 0,

  width: '100vw',
  height: 137,

  background: '$blueMain',

  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
})

const Menu = () => {
  return <MenuBox>
    <Box css={{ display: 'flex', justifyContent: 'space-around', width: '40%'}}>
      <Nav to="">Upcoming</Nav>
      <Nav to="">Next</Nav>
    </Box>

    <RoundedContainer />
    <FlyingRocket animate />

    <Box css={{ display: 'flex', justifyContent: 'space-around', width: '40%'}}>
      <Nav to="">Latest</Nav>
      <Nav to="">Previous</Nav>
    </Box>
  </MenuBox>
}


export default Menu;