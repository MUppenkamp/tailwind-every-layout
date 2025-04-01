import type { NavLinks, PathName } from './types'

export const SITE_TITLE = 'Tailwind Every Layout'
export const SITE_DESCRIPTION = 'Layout primitives for Tailwind CSS.'
export const GITHUB_URL = 'https://github.com/MUppenkamp/tailwind-every-layout'
export const DEFAULT_THEME_URL = `${GITHUB_URL}/blob/main/tailwind-every-layout/lib/theme.ts`
export const DEFAULT_OPTIONS_URL = `${GITHUB_URL}/blob/main/tailwind-every-layout/lib/options.ts`

export const PRIMARY_LINKS: NavLinks<PathName> = [
  { slug: 'usage', text: 'Usage' },
  { slug: 'layouts', text: 'Layouts' },
  { slug: 'utilities', text: 'Utilities' },
  { slug: 'motivation', text: 'Motivation' },
]
