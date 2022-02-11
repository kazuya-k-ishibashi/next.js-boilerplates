import React from 'react'
import { setConfig } from 'next/config'
import { ThemeProvider, Global } from '@emotion/react'
import { publicRuntimeConfig } from '../next.config.js'
import { theme } from '../src/client/styles/theme'
import { globalStyles } from '../src/client/styles/global'
import 'destyle.css'

setConfig({ publicRuntimeConfig })

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Story />
    </ThemeProvider>
  ),
]
