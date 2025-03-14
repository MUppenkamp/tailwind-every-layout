// import type { AddBaseParamsGenerator } from '../types'
import { l, t } from '../helpers'

// @ts-ignore
const measure = ({ options, theme }) => [
  {
    '*': {
      [l(options, 'maxWidth')]: `${t(theme, 'measure')}`,
    },
    [`${options.measureExceptions}`]: {
      [l(options, 'maxWidth')]: 'none',
    },
  },
]

export default measure
