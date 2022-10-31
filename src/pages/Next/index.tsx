import GradientBackground from "../../components/molecules/GradientBackground";
import { BsCalendar2RangeFill } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import NamedBox from "../../components/molecules/NamedBox";
import Tag from "../../components/atoms/Tag";
import IconedInfo from "../../components/molecules/IconedInfo";
import RedditCampaignButton from "../../components/organisms/RedditCampaignButton";

const Next = () => (
<GradientBackground css={{ display: 'grid', placeItems: 'center' }}>
  <NamedBox name="Nusantara Satu (PSN-6) / GTO-1 / Beresheet">
    <Tag type="info" css={{ '@md': { gridColumn: 'span 2' } }}>Flight N.º 75</Tag>
    <IconedInfo icon={<BsCalendar2RangeFill/>} info="22/02/2019  1:45 am" />
    <IconedInfo icon={<IoIosRocket/>} info="Falcon9" />
    <IconedInfo icon={<HiLocationMarker/>} info="Cape Canaveral Air Force Station Space Launch Complex 40" small />
    <RedditCampaignButton link="https://www.reddit.com/r/spacex/comments/jhu37i/starlink_general_discussion_and_deployment_thread/"/>
  </NamedBox>  
</GradientBackground>)

export default Next;