import classNames from 'classnames'
import { forwardRef, type InputHTMLAttributes } from 'react'
import scss from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: string
  theme?: 'primary' | 'error' | 'default'
  error?: string
  label?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  iconSize?: 'small' | 'medium' | 'big'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = 'text',
      iconSize = 'small',
      placeholder,
      iconLeft,
      iconRight,
      className,
      ...restProps
    },
    ref,
  ) => {
    const labelClasses = classNames('p2', scss['input-box__label'])

    const inputBoxClasses = classNames(
      scss['input-box'],
      error?.length ? scss['error'] : undefined,
    )

    const iconClassNames = classNames({
      icon: true,
      [`icon--${iconSize}`]: true,
    })

    return (
      <label className={inputBoxClasses}>
        {label && <p className={labelClasses}>{label}</p>}

        <div className={scss['input-box__block']}>
          <div className={scss['input-box__info']}>
            {iconLeft && <span className={iconClassNames}>{iconLeft}</span>}

            <input
              type={type}
              placeholder={placeholder}
              ref={ref}
              {...restProps}
            />

            {iconRight && <span className={iconClassNames}>{iconRight}</span>}
          </div>

          {error && (
            <p className={classNames(scss['input-box__error'], 'p2')}>
              {error}
            </p>
          )}
        </div>
      </label>
    )
  },
)

Input.displayName = 'Input'
