import classNames from 'classnames'
import { Link } from 'react-router'

import scss from './Button.module.scss'

interface ButtonProps {
  children?: React.ReactNode
  typeBtn?: 'submit' | 'reset' | 'button'
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  disabled?: boolean
  variant?: 'text' | 'icon'
  size?: 'small' | 'medium' | 'big'
  as?: 'button' | 'link'
  shape?: 'circle' | 'square' | 'default'
  theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'default'
  to?: string
  iconSize?: 'small' | 'medium' | 'big'
  onClick?: () => void,
  className?: string
}

export const Button = ({
  typeBtn = 'button',
  children,
  as = 'button',
  shape = 'default',
  size = 'small',
  iconSize = 'small',
  variant = 'text',
  theme = 'default',
  iconLeft,
  iconRight,
  className,
  onClick,
  disabled,
  ...restProps
}: ButtonProps) => {
  const iconClassNames = classNames({
    icon: true,
    [`icon--${iconSize}`]: true,
  })

  const buttonClassNames = classNames(
    scss.button,
    scss[`button--${size}`],
    scss[`button--${variant}`],
    scss[`button--theme-${theme}`],
    // scss[`button--${shape}`],
    {
      [scss['button--disabled']]: disabled,
    },
    className
  )

  const content = (
    <>
      {iconLeft && <span className={iconClassNames}>{iconLeft}</span>}

      {variant !== 'icon' && children}

      {iconRight && <span className={iconClassNames}>{iconRight}</span>}
    </>
  )

  if (as === 'link') {
    return (
      <Link
        to={restProps.to || '#'}
        {...restProps}
        className={buttonClassNames}
      >
        {content}
      </Link>
    )
  }
  return (
    <button
      type={typeBtn}
      onClick={onClick}
      {...restProps}
      className={buttonClassNames}
    >
      {content}
    </button>
  )
}
