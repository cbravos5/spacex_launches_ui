import { keyframes, styled } from "../../../stitches/stitches.config";
import Rocket from "../../atoms/Rocket";

const skyRise = keyframes({
  to: {
    width: 76,
    top: 53,
    transform: 'translateX(-50%) translateY(0)',
  },
});

const FlyingRocket = styled(Rocket, {
  position: 'fixed',
  
  aspectRatio: 185 / 328,

  fill: '$light',

  left: '50%',

  zIndex: 3,

  variants: {
    animate: {
      true: {
        width: 185,
        top: '50%',

        transform: 'translateX(-50%) translateY(-50%)',
      
        animation: `${skyRise} 2s 0.5s forwards`,
      },
      false: {
        width: 76,
        top: 53,
        transform: 'translateX(-50%)',
      }
    }
  }
})

export default FlyingRocket;