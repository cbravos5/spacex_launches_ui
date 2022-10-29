import Countdown from 'react-countdown';
import TimedCardGroup from '../../molecules/TimedCardGroup';

const LaunchCountdown = () => (
  <Countdown date={Date.now() + 200000} renderer={TimedCardGroup} />
);

export default LaunchCountdown;
