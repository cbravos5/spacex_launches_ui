import { globalCss } from '../stitches/stitches.config';

export const globalStyles = globalCss({
  '*': {
    m: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$Raleway',

    '&::-webkit-scrollbar': {
      display:' none'
    },

    '-ms-overflow-style': 'none',  
    scrollbarWidth: 'none',  
    
  },
  'html, body': {
    minHeight: '100%',
    scrollBehavior: 'smooth',
  },
  body: {
    background: '$light',
    overflowX: 'hidden',
  },
  a: {
    textDecoration: 'none',
    outline: 0,
    cursor: 'auto',

    '&:hover, &:focus, &:active': {
      textDecoration: 'none',
      outline: 0,
    },
  },
});
