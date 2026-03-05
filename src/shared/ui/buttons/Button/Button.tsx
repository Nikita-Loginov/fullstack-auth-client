import { Button as ButtonAntd } from 'antd'
import classNames from 'classnames'

import type { ButtonProps as AntdButtonProps } from 'antd/es/button'

import scss from './Button.module.scss'

interface ButtonProps extends AntdButtonProps {
  iconSize?: 'base' | 'big'
}

export const Button = ({
  className,
  iconSize = 'big',
  type = 'default',
  shape = 'default',
  icon,
  ...rest
}: ButtonProps) => {
  const classesBtn = classNames(
    scss['button'],
    className,
    type ? scss[`${type}-type`] : undefined,
    shape ? scss[`${shape}-size`] : undefined,
  )

  const classesIcon = classNames({
    icon: true,
    'icon--big': iconSize === 'big',
  })

  const iconNode = icon ? (
    <span className={classesIcon}>{icon}</span>
  ) : undefined

  return <ButtonAntd className={classesBtn} icon={iconNode} {...rest} />
}
