import { CSS } from '../../../stitches/stitches.config';
import { Box } from '../../atoms/Box';

type Props = { 
  css?: CSS;
  children?: React.ReactNode;
}

const GradientBackground = ({ css, children }: Props) => (
  <Box
    children={children}
    css={{
      width: '100vw',
      height: 'calc(100vh - 5vw)',
      background:
        'linear-gradient(180deg,#D9D9D9 -13.94%, rgba(0, 126, 167, 0.4) 50%, #D9D9D9 100%)',
      mt: '5vw',
      ...css
    }}
  />
);

export default GradientBackground;
