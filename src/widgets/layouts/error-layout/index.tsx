import { Outlet } from 'react-router'

export const ErrorLayout = () => {
  return (
    <>
      <header>header для ошибок</header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
