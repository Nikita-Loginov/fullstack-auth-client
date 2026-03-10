import { Container } from '@shared/ui'

import { Button } from '@shared/ui/buttons'

import { ArrowRightToBracketIcon, BasketShoppingIcon } from '@widgets/ui'

import scss from './HomeHero.module.scss'

export const HomeHero = () => {
  return (
    <section className={scss['hero']}>
      <Container>
        <div className={scss['hero-inner']}>
          <h1>Привет, куда ты хочешь?</h1>

          <div className={scss['hero-btns']}>
            <Button
              as="link"
              to="/auth/register"
              size="medium"
              iconRight={<ArrowRightToBracketIcon />}
            >
              <p className="p2">Регистрация</p>
            </Button>

            <Button
              as="link"
              to="/cart"
              size="medium"
              iconRight={<BasketShoppingIcon />}
            >
              <p className="p2">Корзина</p>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
