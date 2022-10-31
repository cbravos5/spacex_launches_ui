import GradientBackground from "../../components/molecules/GradientBackground";
import LatestLaunchInfo from "../../components/sections/LatestLaunchInfo";
import { urls } from "../../configs/apiRoutes";
import useFetch from "../../hooks/useFetch";
import { ILaunch } from "../../interfaces/ILaunch";

const Latest = () => {
  const { data, error } = useFetch<ILaunch>(urls.latestLaunch);
  
  return (
  <GradientBackground css={{ display: 'grid', placeItems: 'center', p: '5vw' }}>
    { data && <LatestLaunchInfo launch={data} />}
  </GradientBackground>
);}

export default Latest;