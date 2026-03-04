import { Link } from 'react-router'

export const NotFoundPage = () => {
  return (
    <>
      <p>404</p>

      <Link to={'/'}>Перейти на главную</Link>
    </>
  )
}
