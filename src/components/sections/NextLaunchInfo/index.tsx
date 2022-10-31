import { BsCalendar2RangeFill } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import NamedBox from "../../molecules/NamedBox";
import Tag from "../../atoms/Tag";
import IconedInfo from "../../molecules/IconedInfo";
import RedditCampaignButton from "../../organisms/RedditCampaignButton";
import { ILaunch } from "../../../interfaces/ILaunch";

const NextLaunchInfo = ({ launch }: { launch: ILaunch }) => (
  <NamedBox name={launch.name}>
    <Tag type='info' css={{ '@md': { gridColumn: 'span 2' } }}>
      Flight N.º {launch.flightNumber}
    </Tag>
    <IconedInfo icon={<BsCalendar2RangeFill />} info={new Date(launch.dateUtc).toLocaleDateString()} />
    <IconedInfo icon={<IoIosRocket />} info={launch.rocket} />
    <IconedInfo
      icon={<HiLocationMarker />}
      info={launch.launchpad}
      small
    />
    <RedditCampaignButton link={launch.links.redditCampaign} />
  </NamedBox>
);

export default NextLaunchInfo;