import { create, type StateCreator } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { VARIANTS_THEME } from '@shared/config'

import type { Store, InititalState } from './theme.store.types'

import type { ThemeKey } from '@shared/types'

const initialState: InititalState = {
  theme: VARIANTS_THEME.DARK.key,
}

const themeStore: StateCreator<Store> = (set, get) => ({
  ...initialState,
  setTheme: (theme: ThemeKey) => {
    set((state) => {
      return { ...state, theme: theme }
    })
  },
  toggleBaseTheme: () => {
    const current: ThemeKey = get().theme

    set({
      theme:
        current === VARIANTS_THEME.LIGHT.key
          ? VARIANTS_THEME.DARK.key
          : VARIANTS_THEME.LIGHT.key,
    })
  },
})

export const useThemeStore = create<Store>()(
  persist(themeStore, {
    name: 'theme-auth',
    storage: createJSONStorage(() => window.localStorage),
    partialize: (state) => ({ theme: state.theme }),
  }),
)

export const useTheme = () => useThemeStore((state) => state.theme)
