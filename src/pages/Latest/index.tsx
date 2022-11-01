import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFetch from "use-http";
import ClipLoader from "react-spinners/ClipLoader";

import GradientBackground from "../../components/molecules/GradientBackground";
import LatestLaunchInfo from "../../components/sections/LatestLaunchInfo";
import { urls } from "../../configs/apiRoutes";
import { ILaunch } from "../../interfaces/ILaunch";

const Latest = () => {
  const { get, response, loading } = useFetch<ILaunch>({ data: [] });
  const [launch, setLaunch] = useState<ILaunch>();

  const loadLatestLaunch = useCallback(async () => {
    const data = await get(urls.latestLaunch);
    if (response.ok) setLaunch((state) => data);
    else 
      toast("An error occurred while fetching launches", { type: 'error' });
  },[get, response]);

  useEffect(() => { loadLatestLaunch(); },[]);

  return (
    <GradientBackground css={{ display: 'grid', placeItems: 'center', p: '5vw' }}>
      { launch && <LatestLaunchInfo launch={launch} /> }
      <ClipLoader loading={loading} size={150}/>
    </GradientBackground>
  );
}

export default Latest;