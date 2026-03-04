import { Link } from 'react-router'

export const HomePage = () => {
  return (
    <>
      <p>Это главная</p>

      <Link to={'/cart'}>Перейти в корзину</Link>

      <Link to={'/jflsdhfj'}>Перейти в рандом</Link>
    </>
  )
}
