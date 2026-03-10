import { Button } from '@shared/ui/buttons'

import Dropdown from 'antd/es/dropdown/dropdown'

import { VARIANTS_THEME } from '@shared/config'

import type { MenuProps } from 'antd'

import { useTheme, useThemeStore } from '../model/theme.store'

import { MoonIcon, SunIcon } from '@widgets/ui'
import type { ThemeKey } from '@shared/types'

export const ThemeSwitcher = () => {
  const theme = useTheme()
  const { toggleBaseTheme, setTheme } = useThemeStore()

  const THEME_ITEMS: MenuProps['items'] = Object.entries(VARIANTS_THEME).map(
    ([_key, value]) => {
      return {
        key: value.key,
        label: value.key,
        icon: value.icon ? <value.icon /> : null,
      }
    },
  )

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setTheme(e.key as ThemeKey)
  }

  const menuProps: MenuProps = {
    items: THEME_ITEMS,
    selectable: true,
    onClick: handleMenuClick,
    selectedKeys: [theme],
  }

  const handleButtonClick = () => {
    toggleBaseTheme()
  }

  return (
    <>
      <Dropdown menu={menuProps}>
        <Button
          shape="circle"
          size="medium"
          iconLeft={theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          variant="icon"
          iconSize="big"
          onClick={handleButtonClick}
        ></Button>
      </Dropdown>
    </>
  )
}
