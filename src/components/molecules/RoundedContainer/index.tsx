import { styled } from '../../../stitches/stitches.config';
import { Box } from '../../atoms/Box';
import Rocket from '../../atoms/Rocket';

const MenuRocket = styled(Rocket, {
  aspectRatio: 185 / 328,
  width: 76,
  fill: '$light',
});

const RoundedContainer = () => (
  <Box
    css={{
      width: 201,
      height: 201,
      background: '$blueMain',
      zIndex: 2,
      borderRadius: '100%',
      transform: 'translateY(25%)',
      display: 'grid',
      placeItems: 'center'
    }}
  >
    {/* <MenuRocket /> */}
  </Box>
);

export default RoundedContainer;
