import useBreakpoints from "../../../hooks/useBreakpoints";

import { styled } from "../../../stitches/stitches.config";
import ArrowRight from "../../atoms/ArrowRight";
import { Box } from "../../atoms/Box";
import UnderlinedTitle from "../../atoms/UnderlinedTitle";
import KnowMoreButton from "../../molecules/KnowMoreButton";
import LaunchCountdown from "../../organisms/LaunchCountdown";

const Container = styled('div',{
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '8vw',

  height: 'calc(100% - 5vw)',
  p: '10vw 5vw 5vw',

  '@md': {
    justifyContent: 'space-around',
    flexDirection: 'row',
  }
});

const Group = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '10vw',

  '@md': {
    gap: '7vw',
    alignItems: 'flex-start',
  },

  '@lg2': {
    gap: '5vw',
  }
});

const MissionName = styled('p', {
  fontSize: 'clamp($textMobile, 2vw, $textDesktop)',
  color: '$darkBlue',
  textAlign: 'center',

  '@md': {
    width: '60%',
    textAlign: 'left',
  }

})

const MainNextLaunch = () => {
  const { isMdScreen } = useBreakpoints()

  return <Container>
      <Group>
        <UnderlinedTitle>Next Launch</UnderlinedTitle>
        <MissionName>Nusantara Satu (PSN-6) / GTO-1 / Beresheet</MissionName>
        { !isMdScreen && <KnowMoreButton /> }
      </Group>
      <Box>
        <LaunchCountdown />
      </Box>
      { isMdScreen && <KnowMoreButton /> }
  </Container>
};

export default MainNextLaunch;