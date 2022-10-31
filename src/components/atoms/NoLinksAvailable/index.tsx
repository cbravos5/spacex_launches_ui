import { styled } from "../../../stitches/stitches.config"

const StyledText = styled('p', {
  fontSize: 'clamp($textMobile, 1.5vw, $textDesktop)',
  textAlign: 'center'
});

const NoLinksAvailable = () => <StyledText>No links available</StyledText>

export default NoLinksAvailable;