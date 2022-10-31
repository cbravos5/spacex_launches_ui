import Tag from "../../components/atoms/Tag";
import GradientBackground from "../../components/molecules/GradientBackground";
import IconedInfo from "../../components/molecules/IconedInfo";
import NamedBox from "../../components/molecules/NamedBox";

import { BsCalendar2RangeFill } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import YoutubeButton from "../../components/organisms/YoutubeButton";

const Latest = () => (<GradientBackground css={{ display: 'grid', placeItems: 'center' }}>
<NamedBox name="Crew-5">
  <Tag type="info">Flight N.º 75</Tag>
  <Tag type="success">Success</Tag>
  <IconedInfo icon={<BsCalendar2RangeFill/>} info="22/02/2019  1:45 am" />
  <IconedInfo icon={<IoIosRocket/>} info="Falcon9" />
  <IconedInfo icon={<HiLocationMarker/>} info="Cape Canaveral Air Force Station Space Launch Complex 40" small />
  <YoutubeButton id="5EwW8ZkArL4"/>
</NamedBox>  
</GradientBackground>)

export default Latest;