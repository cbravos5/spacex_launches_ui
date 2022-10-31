import { styled } from "../../../stitches/stitches.config";
import LaunchInfoContainer from "../../atoms/LaunchInfoContainer";

const MissionName = styled('p', {
  fontSize: 'clamp($textMobile, 2vw, $textDesktop)',
  color: '$light',
  fontWeight: '$semibold',
  textAlign: 'center',

  width: '100%',
  height: '5vw',

  background: '$blueMain',

  position: 'absolute',
  top: 0,
  left: 0,

  display: 'grid',
  placeItems: 'center'
});

type Props = {
  children?: React.ReactNode;
  name: string;
  isSmall?: boolean;
}

const NamedBox = ({ children, name, isSmall }: Props) => 
<LaunchInfoContainer small={isSmall}>
  <MissionName>{name}</MissionName>
  {children}
</LaunchInfoContainer>

export default NamedBox;