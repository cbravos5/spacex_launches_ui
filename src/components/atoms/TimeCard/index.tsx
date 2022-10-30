import { styled } from "../../../stitches/stitches.config";

const Card = styled('div', {
  fontSize: 'clamp($textMobile, 2vw, 42px)',
  color: '$light',
  textAlign: 'center',

  background: '$darkBlue',
  borderRadius: '10px',

  py: 15,

  width: '25vw',
  minWidth: 120,
  
  boxShadow:
  '0px 3px 6px rgba(14, 31, 53, 0.08), 0px 6px 12px rgba(14, 31, 53, 0.12), 0px 14px 24px rgba(14, 31, 53, 0.08)',
  
  '@md': {
    height: 'fit-content',
    maxWidth: 474,
    py: 18,
  },

  '@lg2': {
    py: 25
  }
});

const TimeCard = ({ ...props }) => <Card {...props} />

export default TimeCard;