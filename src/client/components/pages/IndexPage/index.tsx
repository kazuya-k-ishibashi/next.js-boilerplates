import React from 'react'
import { css, useTheme } from '@emotion/react'

export const IndexPage: React.FC = () => {
  const styles = useStyles()

  return <h1 css={styles.title()}>Hello, Next.js!</h1>
}

const useStyles = () => {
  const { breakpoints } = useTheme()

  const title = () =>
    css({
      fontSize: '2rem',
      fontWeight: 'bold',
      [breakpoints.mediumUp]: {
        textDecoration: 'underline',
      },
    })

  return {
    title,
  }
}
