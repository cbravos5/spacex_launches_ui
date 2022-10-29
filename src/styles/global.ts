import { globalCss } from '../stitches/stitches.config';

export const globalStyles = globalCss({
  '*': {
    m: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body, #__next': {
    minHeight: '100%',
    scrollBehavior: 'smooth',
  },
  body: {
    background: '$light',
    fontFamily: '$Raleway',
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
