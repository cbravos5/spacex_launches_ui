import { styled } from '../../../stitches/stitches.config';
import { Box } from '../../atoms/Box';
import Rocket from '../../atoms/Rocket';

const RoundedContainer = () => (
  <Box
    css={{
      minWidth: 72,
      minHeight: 72,
      size: '10vw',
      background: '$blueMain',
      zIndex: 2,
      borderRadius: '100%',
      transform: 'translateY(15%)',
      display: 'grid',
      placeItems: 'center'
    }}
  />
);

export default RoundedContainer;
