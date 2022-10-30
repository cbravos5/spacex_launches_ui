import { Box } from '../../atoms/Box';

const GradientBackground = ({ ...props }) => (
  <Box
    {...props}
    css={{
      width: '100vw',
      height: 'calc(100vh - 5vw)',
      background:
        'linear-gradient(180deg,#D9D9D9 -13.94%, rgba(0, 126, 167, 0.4) 50%, #D9D9D9 100%)',
      mt: '5vw'
    }}
  />
);

export default GradientBackground;
