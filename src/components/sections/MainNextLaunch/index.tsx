import { styled } from "../../../stitches/stitches.config";
import ArrowRight from "../../atoms/ArrowRight";
import { Box } from "../../atoms/Box";
import UnderlinedTitle from "../../atoms/UnderlinedTitle";
import KnowMoreButton from "../../molecules/KnowMoreButton";
import LaunchCountdown from "../../organisms/LaunchCountdown";

const Container = styled('div',{
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',

  height: 'calc(100% - 137px)',
  padding: '5vw 10vw',
});

const RightSide = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  gap: 140
});

const MissionName = styled('p', {
  fontSize: '36px',
  color: '$darkBlue',

  width: '60%'
})

const MainNextLaunch = () => {


  return <Container>
      <RightSide>
        <UnderlinedTitle>Next Launch</UnderlinedTitle>
        <MissionName>Nusantara Satu (PSN-6) / GTO-1 / Beresheet</MissionName>
        <KnowMoreButton />
      </RightSide>
      <Box>
        <LaunchCountdown />
      </Box>
  </Container>
};

export default MainNextLaunch;