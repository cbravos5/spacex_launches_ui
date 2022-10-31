import { ILaunch } from "../../../interfaces/ILaunch";
import Tag from "../../atoms/Tag";
import IconedInfo from "../../molecules/IconedInfo";
import NamedBox from "../../molecules/NamedBox";
import YoutubeButton from "../../organisms/YoutubeButton";

import { BsCalendar2RangeFill } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

const LatestLaunchInfo = ({ launch }: { launch: ILaunch }) => (
  <NamedBox name={launch.name}>
  <Tag type='info'>Flight N.º {launch.flightNumber}</Tag>
  { launch.success ? <Tag type='success'>Success</Tag> : <Tag type='fail'>Failed</Tag> }
  <IconedInfo icon={<BsCalendar2RangeFill />} info={new Date(launch.dateUtc).toLocaleString()} />
  <IconedInfo icon={<IoIosRocket />} info={launch.rocket} />
  <IconedInfo
    icon={<HiLocationMarker />}
    info={launch.launchpad}
    small
  />
  <YoutubeButton id={launch.links.youtubeId} />
</NamedBox>
);

export default LatestLaunchInfo;