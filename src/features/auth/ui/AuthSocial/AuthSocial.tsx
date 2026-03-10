import { Button } from '@shared/ui/buttons'

import { GoogleIcon, GithubIcon } from '@widgets/ui'

import scss from './AuthSocial.module.scss'

export const AuthSocial = () => {
  return (
    <div className={scss.social}>
      <div className={scss['social-btns']}>
        <Button
          size="medium"
          theme="secondary"
          iconLeft={<GoogleIcon />}
          iconSize="big"
          typeBtn="button"
        >
          <p className="p2">Google</p>
        </Button>

        <Button
          size="medium"
          theme="secondary"
          iconLeft={<GithubIcon />}
          iconSize="big"
          typeBtn="button"
        >
          <p className="p2">Github</p>
        </Button>
      </div>

      <div className={scss['social-decor']}>
        <span></span>

        <p className={scss['text']}>или</p>

        <span></span>
      </div>
    </div>
  )
}
