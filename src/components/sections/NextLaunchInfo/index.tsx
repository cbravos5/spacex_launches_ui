import { ILaunch } from "../../../interfaces/ILaunch";
import LaunchInfoCard from "../../organisms/LaunchInfoCard";

const NextLaunchInfo = ({ launch }: { launch: ILaunch }) => (
  <LaunchInfoCard launch={launch} isUpcoming/>
);

export default NextLaunchInfo;