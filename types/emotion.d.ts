import '@emotion/react'
import type { Theme as MyTheme } from '@/client/styles/theme'

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}
