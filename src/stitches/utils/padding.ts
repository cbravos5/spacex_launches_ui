import type * as Stitches from '@stitches/react';

export const padding = {
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value,
  }),

  pt: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingTop: value,
  }),

  pr: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingRight: value,
  }),

  pb: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingBottom: value,
  }),

  pl: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingLeft: value,
  }),

  px: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),

  py: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
};
