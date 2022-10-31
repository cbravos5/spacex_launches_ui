import Tag from "../../atoms/Tag"

type MissionStatusProps = {
  isUpcoming?: boolean;
  isSuccess: boolean;
  isSmall?: boolean;
}

const MissionStatus = ({ isUpcoming, isSuccess, isSmall }: MissionStatusProps) =>  {
  if(isUpcoming) return <Tag type='info' small={isSmall}>Upcoming</Tag>

  return isSuccess ? (
    <Tag type='success' small={isSmall}>Success</Tag>
  ) : (
    <Tag type='fail' small={isSmall}>Failed</Tag>
  );
};

export default MissionStatus;