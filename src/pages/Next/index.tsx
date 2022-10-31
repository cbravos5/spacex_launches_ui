import GradientBackground from '../../components/molecules/GradientBackground';
import NextLaunchInfo from '../../components/sections/NextLaunchInfo';
import { urls } from '../../configs/apiRoutes';
import useFetch from '../../hooks/useFetch';
import { ILaunch } from '../../interfaces/ILaunch';

const Next = () => {
  const { data, error } = useFetch<ILaunch>(urls.nextLaunch);

  return (
    <GradientBackground css={{ display: 'grid', placeItems: 'center' }}>
      {data && <NextLaunchInfo launch={data} />}
    </GradientBackground>
  );
};

export default Next;
