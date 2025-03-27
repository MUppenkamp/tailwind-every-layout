import { tailwindLayouts, defaultOptions } from 'tailwind-every-layout';

export const theme = {
  extend: {
    fontFamily: require('./tailwind/fontFamily.cjs'),
    colors: require('./tailwind/colors.cjs'),
    layouts: require('./tailwind/layouts.cjs'),
    typography: require('./tailwind/typography.cjs'),
  },
}

export const plugins = [
  require('./tailwind/base.cjs'),
  tailwindLayouts({
    ...defaultOptions,
    useLogicalProperties: true,
    useGlobalScrollbarStyles: true,
    measureExceptions: [
      defaultOptions.measureExceptions,
      '.prose *:not(img):not(video)',
    ].join(','),
  }),
]

export const darkMode = 'class';
