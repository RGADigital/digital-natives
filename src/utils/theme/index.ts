import type { MantineThemeOverride } from '@mantine/core'
import { Container, createTheme } from '@mantine/core'

import { cyan, pink } from './color'
import { BREAKPOINTS, CONTAINER_SIZES } from './container'
import { FONT_FAMILY, FONT_SIZES } from './font'
import { ROUNDED } from './rounded'

const componentTheme = {
  Container: Container.extend({
    vars: (_, { size, fluid }) => ({
      root: {
        '--container-size': fluid || !size ? '100%' : CONTAINER_SIZES[size],
      },
    }),
  }),
}

const theme: MantineThemeOverride = createTheme({
  activeClassName: 'active',
  breakpoints: BREAKPOINTS,

  colors: {
    cyan,
    pink,
  },
  components: componentTheme,
  fontFamily: FONT_FAMILY,
  fontSizes: FONT_SIZES,
  lineHeights: {
    xs: '120%',
  },
  headings: {
    fontFamily: FONT_FAMILY,
    textWrap: 'pretty',
    sizes: {
      h1: {
        fontSize: '60px',
        fontWeight: '400',
        lineHeight: '107%',
      },
      h2: {
        fontSize: '26px',
        fontWeight: '500',
        lineHeight: '120%',
      },
    },
  },
  radius: ROUNDED,
})

export default theme
