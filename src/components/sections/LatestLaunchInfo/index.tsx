import { ILaunch } from "../../../interfaces/ILaunch";
import LaunchInfoCard from "../../organisms/LaunchInfoCard";

const LatestLaunchInfo = ({ launch }: { launch: ILaunch }) => (
  <LaunchInfoCard launch={launch}/>
);

export default LatestLaunchInfo;