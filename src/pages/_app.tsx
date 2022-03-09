import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme, globalCss } from '../../stitches.config'

const globalStyles = globalCss({
  html: {
    overflowX: 'hidden'
  },
  body: {
    margin: 0,
    backgroundColor: '$loContrast'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light', dark: darkTheme }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
