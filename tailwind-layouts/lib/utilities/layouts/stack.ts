import type { Utility } from '../../types'
import {
  generateObjectOfNaturaLNumbersUpto,
  l,
  t,
  c,
} from '../../helpers'
import defaultOptions from '../../options'

const stack: Utility = {
  static: [
// @ts-ignore
// @ts-ignore
    ({ options, theme }) => [
      {
        [`.${c(options, 'stack')}`]: {
          [`&:not(.${c(options, 'stack')}_no-flex)`]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          },
          '& > *': {
            [l(options, 'marginTop')]: '0',
            [l(options, 'marginBottom')]: '0',
          },
          '& > * + *': {
            [l(options, 'marginTop')]: t(theme, 'baseSpacing'),
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
        [`${c(options, 'stack')}_space`]: (value) => ({
          [`&.${c(options, 'stack')} > * + *`]: {
            [l(options, 'marginTop')]: `${value}`,
          },
        }),
      },
      {
        values: theme('spacing') || {},
      },
    ],
// @ts-ignore
// @ts-ignore
    ({ options, theme }) => [
      {
        // @ts-ignore
        [`${c(options, 'stack')}_split-after`]: (value) => ({
          [`&.${c(options, 'stack')}>:nth-child(${value})`]: {
            [l(options, 'marginBottom')]: 'auto',
          },
        }),
      },
      {
        values: generateObjectOfNaturaLNumbersUpto(
          Number(options.maxStackSplitAfter),
          defaultOptions.maxStackSplitAfter,
        ),
      },
    ],
  ],
}

export default stack
