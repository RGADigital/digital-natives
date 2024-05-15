import type { AppProps } from 'next/app'

import theme from '@/utils/theme'

import '@mantine/core/styles.css'
import '../styles/global.css'

import { MantineProvider } from '@mantine/core'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider theme={theme}>
    <Component {...pageProps} />
  </MantineProvider>
)

export default MyApp
