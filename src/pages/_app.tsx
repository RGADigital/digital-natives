import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

import theme from '@/utils/theme'

import '@mantine/core/styles.css'
import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MantineProvider theme={theme}>
    <Component {...pageProps} />
  </MantineProvider>
)

export default MyApp
