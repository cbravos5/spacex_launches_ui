import { styled } from "../../../stitches/stitches.config";
import TimeCard from "../../atoms/TimeCard";

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  gap: 25,

  '@md': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

type TimedCardGroupProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimedCardGroup = ({ days, hours, minutes, seconds }: TimedCardGroupProps) => <Container>
  <TimeCard>{days} days</TimeCard>
  <TimeCard>{hours} hours</TimeCard>
  <TimeCard>{minutes} minutes</TimeCard>
  <TimeCard>{seconds} seconds</TimeCard>
</Container>;

export default TimedCardGroup;