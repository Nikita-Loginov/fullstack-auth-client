import { Outlet } from 'react-router'

export const PublicLayout = () => {
  return (
    <>
      <header>header для публичных страниц</header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
