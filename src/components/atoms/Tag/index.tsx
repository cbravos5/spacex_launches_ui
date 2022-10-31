import { styled } from "../../../stitches/stitches.config";


const Tag = styled('p', {
  p: '1.5vw',
  
  fontSize: 'clamp($textMobile, 2.5vw, 40px)',

  borderRadius: '50px',

  width: 'fit-content',

  color: '$blueSecondary',

  variants: {
    type: {
      info: {
        background: "#007da760"
      }
    }
  }
})

export default Tag;