import { ILaunch } from "../../../interfaces/ILaunch";
import Tag from "../../atoms/Tag";
import IconedInfo from "../../molecules/IconedInfo";
import NamedBox from "../../molecules/NamedBox";
import YoutubeButton from "../YoutubeButton";
import RedditCampaignButton from "../RedditCampaignButton";

import { BsCalendar2RangeFill } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import MissionStatus from "../../molecules/MissionStatus";

type LaunchInfoProps = {
  launch: ILaunch;
  isUpcoming?: boolean;
  isSmall?: boolean;
}

const LaunchInfoCard = ({ launch, isUpcoming, isSmall }: LaunchInfoProps) => (
  <NamedBox name={launch.name} isSmall={isSmall}>
    <Tag type='info' small={isSmall}>Flight N.º {launch.flightNumber}</Tag>
    <MissionStatus
      isUpcoming={isUpcoming}
      isSuccess={launch.success}
      isSmall={isSmall}
    />

    <IconedInfo
      icon={<BsCalendar2RangeFill />}
      info={new Date(launch.dateUtc).toLocaleString()}
    />
    <IconedInfo icon={<IoIosRocket />} info={launch.rocket} />
    <IconedInfo icon={<HiLocationMarker />} info={launch.launchpad} small />

    {isUpcoming ? (
      <RedditCampaignButton link={launch.links.redditCampaign}/>
    ) : (
      <YoutubeButton id={launch.links.youtubeId}/>
    )}
  </NamedBox>
);

export default LaunchInfoCard;