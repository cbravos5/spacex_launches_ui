import IconButton from '../../molecules/IconButton';

import { TiSocialYoutubeCircular } from 'react-icons/ti';
import NoLinksAvailable from '../../atoms/NoLinksAvailable';

const YoutubeButton = ({ id }: { id: string }) => id ? (
  <IconButton icon={<TiSocialYoutubeCircular />} text='Launch Video' link={`https://youtube.com/watch?v=${id}`} />
) : <NoLinksAvailable />

export default YoutubeButton;
