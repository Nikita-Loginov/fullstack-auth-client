import { Button } from '@shared/ui/buttons'

import { useTheme, useThemeStore } from '../model/theme.store'

import { MoonIcon, SunIcon } from '@widgets/ui'

export const ThemeSwitcher = () => {
  const theme = useTheme()
  const { toggleBaseTheme } = useThemeStore()

  const handleClick = () => {
    toggleBaseTheme()
  }

  return (
    <>
      <Button
        shape="circle"
        size="medium"
        icon={theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={handleClick}
      />
    </>
  )
}
