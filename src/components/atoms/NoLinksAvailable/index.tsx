import { styled } from "../../../stitches/stitches.config"

const StyledText = styled('p', {
  fontSize: 'clamp($textMobile, 1.5vw, $textDesktop)'
});

const NoLinksAvailable = () => <StyledText>No links available</StyledText>

export default NoLinksAvailable;