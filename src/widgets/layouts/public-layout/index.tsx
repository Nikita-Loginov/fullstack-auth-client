import { Outlet } from 'react-router';

import { Header } from '@widgets/ui';

export const PublicLayout = () => {
  return (
    <div className='wrapper'>
      <Header />

      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}
