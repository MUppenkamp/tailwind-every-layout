// @ts-ignore
import type { PluginAPI, PluginUtils } from 'tailwindcss/plugin'

export type PluginOptions = {
  useLogicalProperties: boolean
  useGlobalMeasure: boolean
  measureExceptions: string
  baseSpacingKey: string
  measureKey: string
  useGlobalScrollbarStyles: boolean
  maxStackSplitAfter: number
  switcherLimit: number
  maxSwitcherLimit: number
  frameSelectors: string
  classNames: {
    stack: string
    box: string
    center: string
    cluster: string
    sidebar: string
    switcher: string
    cover: string
    coverTarget: string
    grid: string
    frame: string
    frameTarget: string
    reel: string
    imposter: string
    icon: string
    iconTarget: string
    scrollbar: string
    'border-hc': string
  }
}

export type PluginTheme = {
  measure: `${string}ch`
  baseSpacing: `${string}rem`
  sidebarMainMinWidth: `${number}%`
  gridItemMinWidth: string
  frameAspectRatio: string
  iconGap: `${string}em`
  iconSize: `${string}em`
  iconNudgeSm: `${string}em`
  iconNudgeMd: `${string}em`
  iconNudgeLg: `${string}em`
  iconNudgeXl: `${string}em`
  scrollbarThumbColor: string
  scrollbarTrackColor: string
  scrollbarSize: 'thin' | 'medium' | 'thick'
  scrollbarBorderRadius: '9999px' | '0px'
}

export type PluginThemeFunction = PluginAPI['theme']

export type AddBaseParams = Parameters<PluginAPI['addBase']>
export type AddUtilitiesParams = Parameters<PluginAPI['addUtilities']>
export type MatchUtilitiesParams = Parameters<
  PluginAPI['matchUtilities']
>

type ParamsGenerator<
  T extends | AddBaseParams
    | AddUtilitiesParams
    | MatchUtilitiesParams,
> = (config: {
  options: PluginOptions
  theme: PluginThemeFunction
}) => T


export type AddUtilitiesParamsGenerator =
  ParamsGenerator<AddUtilitiesParams>

export type MatchUtilitiesParamsGenerator =
  ParamsGenerator<MatchUtilitiesParams>

export type Utility = {
  static?: AddUtilitiesParamsGenerator[]
  dynamic?: MatchUtilitiesParamsGenerator[]
}

export type ValueOf<T> = T[keyof T]
