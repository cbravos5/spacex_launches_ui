import { ILaunch } from "../../../interfaces/ILaunch";
import { styled } from "../../../stitches/stitches.config";
import LaunchInfoCard from "../../organisms/LaunchInfoCard";

const Grid = styled('div', {
  display: 'grid',
  columnGap: '5vw',
  rowGap: '3vw',

  '@lg2': { gridTemplateColumns: '1fr 1fr' }
})

const mock = {
  dateUtc: "2022-10-05T16:00:00.000Z",
  details:'',
  flightNumber: 187,
  id: "62dd70d5202306255024d139",
  launchpad: "Kennedy Space Center Historic Launch Complex 39A",
  links: {article:'', wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Crew-5", youtubeId: "5EwW8ZkArL4", redditCampaign: ''},
  name: "Crew-5",
  rocket: "Falcon 9",
  success: true,
  upcoming: false
}

type LaunchesGridProps = {
  launches: ILaunch[];
}

const LaunchesGrid = ({ launches }: LaunchesGridProps) => (
  <Grid>
    {launches.map((launch, i) => (
      <LaunchInfoCard key={i} launch={launch} isSmall isUpcoming={launch.upcoming} />
    ))}
  </Grid>
);

export default LaunchesGrid;