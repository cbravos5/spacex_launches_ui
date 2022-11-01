import { keyframes, styled } from "../../../stitches/stitches.config";
import Rocket from "../../atoms/Rocket";

const commonAnimation = {
  minWidth: 28,
  width: '3vw',

  transform: 'translateX(-50%) translateY(0)',

  cursor: 'pointer',
}

const skyRiseMobile = keyframes({
  to: {
    ...commonAnimation,
    top: '2.5vw'
  },
});

const skyRiseDesktop = keyframes({
  to: {
    ...commonAnimation,
    top: '1vw'
  },
});



const FlyingRocket = styled(Rocket, {
  position: 'fixed',
  
  aspectRatio: 185 / 328,

  fill: '$light',

  left: '50%',

  zIndex: 3,

  '&:hover': {
    filter: 'brightness(90%)'
  },

  variants: {
    animate: {
      true: {
        minWidth: 93,
        width: '7vw',
        top: '50%',

        transform: 'translateX(-50%) translateY(-50%)',

        animation: `${skyRiseMobile} 2s 0.5s forwards`,

        '@md': { animation: `${skyRiseDesktop} 2s 0.5s forwards` }
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