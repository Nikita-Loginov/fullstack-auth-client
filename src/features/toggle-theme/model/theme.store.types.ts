import type { ThemeKey } from '@shared/types'

export type InititalState = {
  theme: ThemeKey
}

export type Actions = {
  toggleBaseTheme: () => void
  setTheme: (theme: ThemeKey) => void
}

export type Store = InititalState & Actions
