import IconButton from '../../molecules/IconButton';

import { BsReddit } from 'react-icons/bs';
import NoLinksAvailable from '../../atoms/NoLinksAvailable';

const RedditCampaignButton = ({ link }: { link: string }) => link ? (
  <IconButton icon={<BsReddit />} text='Reddit Campaign' link={link} />
) : <NoLinksAvailable />

export default RedditCampaignButton;
