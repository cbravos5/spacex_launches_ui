import { styled } from "../../../stitches/stitches.config";

const Card = styled('div', {
  fontSize: '42px',
  color: '$light',
  textAlign: 'center',

  background: '$darkBlue',
  borderRadius: '10px',

  py: 25,

  width: 474,

  boxShadow:
  '0px 3px 6px rgba(14, 31, 53, 0.08), 0px 6px 12px rgba(14, 31, 53, 0.12), 0px 14px 24px rgba(14, 31, 53, 0.08)',
});

const TimeCard = ({ ...props }) => <Card {...props} />

export default TimeCard;