import { useRef } from 'react'

import { Container } from '@shared/ui'
import { ThemeSwitcher } from '@features/toggle-theme'
import { Logo } from '../logo/Logo'

import { useElementSize } from '@shared/lib'

import scss from './Header.module.scss'

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);


  useElementSize({ ref: headerRef, varName: 'header-height' })

  return (
    <header className={scss['header']} ref={headerRef}>
      <Container>
        <div className={scss['header__inner']}>
          <Logo to="/" />

          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  )
}
