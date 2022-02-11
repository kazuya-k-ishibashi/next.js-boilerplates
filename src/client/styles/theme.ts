export type Theme = {
  breakpoints: {
    small: string
    mediumUp: string
    largeUp: string
  }
  fontColor: {
    basic: string
  }
}

const breakpoints = [768, 992] as const

export const theme: Theme = {
  breakpoints: {
    small: `@media screen and (max-width: ${breakpoints[0] - 1}px)`,
    mediumUp: `@media screen and (min-width: ${breakpoints[0]}px)`,
    largeUp: `@media screen and (min-width: ${breakpoints[1]}px)`,
  },
  fontColor: {
    basic: '#333',
  },
}
