import { Navigate, Outlet } from 'react-router'

export const PrivateLayout = () => {
  const isAuth = true

  if (!isAuth) {
    return <Navigate to={'/'} />
  }
  return (
    <>
      <header>header для приватных страниц</header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
