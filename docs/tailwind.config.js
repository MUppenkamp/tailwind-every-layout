// import { tailwindLayouts, defaultOptions } from 'tailwind-layouts';
const tailwindLayouts = require('tailwind-layouts')

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
]
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
  require('@tailwindcss/typography'),
  tailwindLayouts,
  // tailwindLayouts({
  //   ...defaultOptions,
  //   useLogicalProperties: true,
  //   classNames: {
  //     ...defaultOptions.classNames,
  //     center: 'el-center',
  //     cluster: 'el-cluster',
  //     cover: 'el-cover',
  //     imposter: 'el-imposter',
  //     reel: 'el-reel',
  //     sidebar: 'el-sidebar',
  //     stack: 'el-stack',
  //     switcher: 'el-switcher',
  //     grid: 'el-grid',
  //   },
  // })
  // tailwindLayouts({
  //   ...defaultLayoutOptions,
  //   useGlobalScrollbarStyles: true,
  //   measureExceptions: [
  //     defaultLayoutOptions.measureExceptions,
  //     '.prose *:not(img):not(video)',
  //   ].join(','),
  // }),
]
export const darkMode = 'class'
