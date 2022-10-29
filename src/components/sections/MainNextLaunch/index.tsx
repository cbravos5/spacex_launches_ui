import { styled } from "../../../stitches/stitches.config";
import ArrowRight from "../../atoms/ArrowRight";
import KnowMoreButton from "../../molecules/KnowMoreButton";

const Container = styled('div',{
  display: 'flex',
  justifyContent: 'space-between',

  height: 'calc(100% - 137px)',
  padding: '5vw 10vw',
});

const RightSide = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '100%'
});

const UnderlinedTitle = styled('h1', {
  width: 'fit-content',
  position: 'relative',

  fontSize: '55px',
  color: '$darkBlue',
  fontWeight: '$medium',

  '&::after': {
    content: '',
    position: 'absolute',
    width: '50%',
    height: 13,
    background: '$darkBlue',
    bottom: -10,
    left: 0
  }
})

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
      {/* <LeftSide>
        <TimeCard>32 days</TimeCard>
        <TimeCard>5 hours</TimeCard>
        <TimeCard>10 minutes</TimeCard>
        <TimeCard>45 seconds</TimeCard>
      </LeftSide> */}
  </Container>
};

export default MainNextLaunch;