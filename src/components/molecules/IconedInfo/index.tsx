import { styled } from "../../../stitches/stitches.config";

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  color: '$blueSecondary',

  gap: '20px',

  svg: {
    size: 'clamp(15px, 5vw, 55px)',
  },
});

const Text = styled('p', {
  fontSize: 'clamp($textMobile, 2vw, $textDesktop)',
  color: '$blueSecondary',

  textAlign: 'center',

  variants: {
    small: {
      true: {
        fontSize: 'clamp(12px, 1.5vw, 26px)',
      }
    }
  }
});

type Props = {
  icon: React.ReactNode;
  info: string;
  small?: boolean;
}; 

const IconedInfo = ({ icon, info, small }: Props) => (
  <Container>
    {icon}
    <Text small={small}>{info}</Text>
  </Container>
);

export default IconedInfo;