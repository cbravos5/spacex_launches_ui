import { createStitches } from '@stitches/react';
import { colors } from './theme/colors';
import { fontWeights } from './theme/fontWeights';
import { lineHeights } from './theme/lineHeights';
import type * as Stitches from '@stitches/react';
import { margin } from './utils/margin';
import { padding } from './utils/padding';
import { CSS as StitchesCSS } from '@stitches/react';

type StringOrNumber = string | number;
type DynamicObjects = Record<string, StringOrNumber>;

export const { css, styled, globalCss, keyframes, config } = createStitches({
  theme: {
    colors,
    fonts: {
      Raleway: 'Raleway',
    },
    fontWeights,
    lineHeights,
    radii: {
      burguer: '11px',
      button: '14px',
    },
    zIndices: {
      BelowMenu: 999,

      Overlay: 1000,
      Menu: 1001,
    },
  },
  utils: {
    linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    centeredBackgroundImage: (
      image: Stitches.PropertyValue<'backgroundImage'>
    ) => ({
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }),

    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    breakpoints: (args: StringOrNumber[]) => {
      const prop: string = String(args[0]);
      const values = args.slice(1);

      return {
        '@md': {
          [prop]: values[0],
        },
        '@lg': {
          [prop]: values[1],
        },
        '@lg2': {
          [prop]: values[2],
        },
        '@xl': {
          [prop]: values[3],
        },
      };
    },

    ...margin,
    ...padding,
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    lg2: '(min-width: 1280px)',
    xl: '(min-width: 1920px)',
  },
});

export type CSS = StitchesCSS<typeof config>;
