import GradientBackground from '../../components/molecules/GradientBackground';
import MainNextLaunch from '../../components/sections/MainNextLaunch';
import { urls } from '../../configs/apiRoutes';
import useFetch from '../../hooks/useFetch';
import { ILaunch } from '../../interfaces/ILaunch';

const Home = () => {
  const { data, error } = useFetch<ILaunch>(urls.nextLaunch);

  return (
    <GradientBackground>
      { data && <MainNextLaunch launch={data}/> }
    </GradientBackground>
  );
};

export default Home;
