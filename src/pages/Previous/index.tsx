import GradientBackground from "../../components/molecules/GradientBackground";
import LatestLaunchInfo from "../../components/sections/LatestLaunchInfo";
import LaunchesGrid from "../../components/sections/LaunchesGrid";
import { urls } from "../../configs/apiRoutes";
import useFetch from "../../hooks/useFetch";
import { ILaunch } from "../../interfaces/ILaunch";

const Previous = () => {
  const { data, error } = useFetch<ILaunch[]>(`${urls.previousLaunches}/1`);
  
  return (
    <GradientBackground
      css={{
        display: 'grid',
        placeItems: 'center',
        p: '15vw',
        height: 'fit-content',
        '@md': { pt: '10vw' },
      }}
    >
      { data && <LaunchesGrid launches={data}/> }
    </GradientBackground>
  );}

export default Previous;