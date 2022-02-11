import { css } from '@emotion/react'
import type { Theme } from './theme'

export const globalStyles = (theme: Theme) =>
  css({
    html: {
      fontSize: '14px',
      scrollBehavior: 'smooth',
    },
    [theme.breakpoints.mediumUp]: {
      html: {
        fontSize: '16px',
      },
    },
    body: {
      color: theme.fontColor.basic,
    },
  })
