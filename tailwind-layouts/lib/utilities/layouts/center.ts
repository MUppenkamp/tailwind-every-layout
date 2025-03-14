import { l, t, c } from '../../helpers'
import type { Utility } from '../../types'

const center: Utility = {
  static: [
// @ts-ignore
// @ts-ignore
    ({ options, theme }) => [
      {
        [`.${c(options, 'center')}`]: {
          boxSizing: 'content-box', // this allows padding (if any) to grow out without infringing upon maxInlineSize (which would happen with `border-box`)
          [l(options, 'marginLeft')]: 'auto',
          [l(options, 'marginRight')]: 'auto',
          [l(options, 'maxWidth')]: t(theme, 'measure'),

          // center child elements based on content width
          [`&.${c(options, 'center')}_intrinsic`]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },

          // center text too
          [`&.${c(options, 'center')}_text`]: {
            textAlign: 'center',
          },
        },
      },
    ],
  ],
  dynamic: [
// @ts-ignore
// @ts-ignore
    ({ options, theme }) => [
      {
        // @ts-ignore
        [`${c(options, 'center')}_max-w`]: (value) => ({
          [`&.${c(options, 'center')}`]: {
            [l(options, 'maxWidth')]: `${value}`,
          },
        }),
      },
      {
        values: theme('maxWidth') || {},
      },
    ],
// @ts-ignore
// @ts-ignore
    ({ options, theme }) => [
      {
        // @ts-ignore
        [`${c(options, 'center')}_gutters`]: (value) => ({
          [`&.${c(options, 'center')}`]: {
            [l(options, 'paddingLeft')]: `${value}`,
            [l(options, 'paddingRight')]: `${value}`,
          },
        }),
      },
      {
        values: theme('spacing') || {},
      },
    ],
  ],
}

export default center
