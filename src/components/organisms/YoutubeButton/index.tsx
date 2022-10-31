import IconButton from '../../molecules/IconButton';

import { TiSocialYoutubeCircular } from 'react-icons/ti';

const YoutubeButton = ({ id }: { id: string }) => (
  <IconButton icon={<TiSocialYoutubeCircular />} text='Launch Video' link={`https://youtube.com/watch?v=${id}`} />
);

export default YoutubeButton;
