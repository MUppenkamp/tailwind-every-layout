import { c } from '../helpers'
import type { Utility } from '../types'

const borderHC: Utility = {
  dynamic: [
// @ts-ignore
// @ts-ignore
    ({ options, theme }) => [
      {
        // @ts-ignore
        [`${c(options, 'border-hc')}`]: (value) => ({
          outlineStyle: 'solid',
          outlineColor: 'transparent',
          outlineWidth: `${value}`,
          outlineOffset: `-${value}`,
        }),
      },
      {
        values: theme('borderWidth') || {},
      },
    ],
  ],
}

export default borderHC
