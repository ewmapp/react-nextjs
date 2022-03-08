import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset
} = createStitches({
  theme: {
    fonts: {
      system: 'system-ui'
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white'
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px'
    }
  }
})

export type CSS = Stitches.CSS<typeof config>
