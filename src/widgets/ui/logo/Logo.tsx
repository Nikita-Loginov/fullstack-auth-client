import { Link } from 'react-router'

import classNames from 'classnames'

import { IdCardIcon } from '../icons'

import scss from './Logo.module.scss'

interface LogoProps {
  to?: string
  size?: 'small' | 'medium'
}

export const Logo = ({ size = 'small', to }: LogoProps) => {
  const content = (
    <span className={classNames(scss['logo'], scss[`logo--${size}`])}>
      <IdCardIcon />
    </span>
  )

  return to ? <Link to={to}>{content}</Link> : content
}
