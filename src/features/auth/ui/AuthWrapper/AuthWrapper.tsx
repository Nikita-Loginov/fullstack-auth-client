import { Link } from 'react-router'

import { Container } from '@shared/ui'
import { AuthSocial } from '../AuthSocial/AuthSocial'

import classNames from 'classnames'

import scss from './AuthWrapper.module.scss'

interface AuthWrapperProps {
  heading: string
  description?: string
  isSocial?: boolean
  backButtonLabel?: string
  backButtonHref?: string
  children?: React.ReactNode
}

export const AuthWrapper = ({
  heading,
  description,
  isSocial,
  backButtonHref,
  backButtonLabel,
  children,
}: AuthWrapperProps) => {
  return (
    <div className={scss.auth}>
      <Container>
        <div className={scss['auth-inner']}>
          <div className={scss['auth-form']}>
            <div className={scss['auth-block']}>
              <h2 className="h2">{heading}</h2>

              {description && (
                <p className={classNames('p2', 'color-dark-400')}>
                  {description}
                </p>
              )}
            </div>

            {isSocial && <AuthSocial />}

            {children}

            {backButtonHref && backButtonLabel && (
              <div className={scss['auth-footer']}>
                <Link to={backButtonHref}>{backButtonLabel}</Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
