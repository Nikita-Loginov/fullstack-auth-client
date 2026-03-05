import { useEffect } from 'react'

import { useTheme } from '@features/toggle-theme'
import { VARIANTS_THEME } from '@shared/config'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTheme()

  useEffect(() => {
    const root = document.documentElement;

    Object.values(VARIANTS_THEME).forEach((theme) => {
      root.classList.remove(theme.key)
    })

    root.classList.add(theme)
  }, [theme])

  return <>{children}</>
}
