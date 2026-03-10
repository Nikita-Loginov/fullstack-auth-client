import { MoonIcon, SunIcon } from '@widgets/ui'

export const VARIANTS_THEME = {
  DARK: {
    key: 'dark' as const,
    icon: MoonIcon,
    oppositeIcon: SunIcon,
  },
  LIGHT: {
    key: 'light' as const,
    icon: SunIcon,
    oppositeIcon: MoonIcon,
  },
}
