import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFetch from "use-http";
import ClipLoader from "react-spinners/ClipLoader";

import GradientBackground from '../../components/molecules/GradientBackground';
import MainNextLaunch from '../../components/sections/MainNextLaunch';
import { urls } from '../../configs/apiRoutes';
import { ILaunch } from '../../interfaces/ILaunch';

const Home = () => {
  const { get, response, loading } = useFetch<ILaunch>({ data: [] });
  const [launch, setLaunch] = useState<ILaunch>();

  const loadNextLaunch = useCallback(async () => {
    const data = await get(urls.nextLaunch);
    if (response.ok) setLaunch((state) => data);
    else 
      toast("An error occurred while fetching launches", { type: 'error' });
  },[get, response]);

  useEffect(() => { loadNextLaunch(); },[]);

  return (
    <GradientBackground css={{ display: 'grid', placeItems: 'center' }}>
      { launch && <MainNextLaunch launch={launch} /> }
      <ClipLoader loading={loading} size={150}/>
    </GradientBackground>
  );
};

export default Home;
