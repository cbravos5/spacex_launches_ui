import Countdown from 'react-countdown';
import TimedCardGroup from '../../molecules/TimedCardGroup';

const LaunchCountdown = ({ launchDate }: { launchDate: string }) => (
  <Countdown date={new Date(launchDate)} renderer={TimedCardGroup} />
);

export default LaunchCountdown;
