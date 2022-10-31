import IconButton from '../../molecules/IconButton';

import { BsReddit } from 'react-icons/bs';

const RedditCampaignButton = ({ link }: { link: string }) => (
  <IconButton icon={<BsReddit />} text='Reddit Campaign' link={link} />
);

export default RedditCampaignButton;
