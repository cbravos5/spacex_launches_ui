import { CSS } from '../../../stitches/stitches.config';
import OutlinedButton from '../../atoms/OutlinedButton';

type IconButtonProps = {
  icon: React.ReactNode;
  text: string;
  css?: CSS;
  link: string;
};

const IconButton = ({ icon, text, css, link }: IconButtonProps) => (
  <OutlinedButton
    href={link}
    target='_blank'
    css={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      svg: {
        size: '2.8vw',
        minHeight: '21px',
        minWidth: '21px',
        fill: '$blueSecondary'
      },
      ...css,
    }}
  >
    {icon}
    {text}
  </OutlinedButton>
);

export default IconButton;