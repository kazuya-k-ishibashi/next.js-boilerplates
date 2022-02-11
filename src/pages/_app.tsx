import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider, Global } from '@emotion/react'
import { theme } from '@/client/styles/theme'
import { globalStyles } from '@/client/styles/global'
import 'destyle.css'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CustomApp
