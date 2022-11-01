import useFetch from "use-http";
import { useCallback, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

import GradientBackground from "../../components/molecules/GradientBackground";
import LaunchesGrid from "../../components/sections/LaunchesGrid";
import { urls } from "../../configs/apiRoutes";
import { ILaunch } from "../../interfaces/ILaunch";
import { IPagedLaunches } from "../../interfaces/IPagedLaunches";
import LoadMore from "../../components/atoms/LoadMore";

const Upcoming = () => {
  const { get, response, loading } = useFetch<IPagedLaunches>({ data: [] });
  const [launches, setLaunches] = useState<ILaunch[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  const loadLaunches = useCallback(async () => {
    const data = await get(`${urls.upcomingLaunches}/${currentPage}`);
    if (response.ok) {
      setLaunches((state) => ([ ...state, ...data.launches ]));
      setHasNextPage(data.hasNextPage);
      setCurrentPage((state) => state + 1);
    }
    else 
      toast("An error occurred while fetching launches", { type: 'error' });
  },[get, response, currentPage]);

  useEffect(() => { loadLaunches(); },[]);

  return (
    <GradientBackground
      css={{
        display: 'grid',
        placeItems: 'center',
        p: '15vw 5vw',
        height: 'fit-content',
        minHeight: 'calc(100vh - 5vw)',
        '@md': { pt: '10vw', px: '15vw' },
      }}
    >
      <LaunchesGrid launches={launches}/>
      <ClipLoader loading={loading} size={150}/>
      { hasNextPage && !loading && <LoadMore onClick={loadLaunches}/> }
    </GradientBackground>
  );
}

export default Upcoming;