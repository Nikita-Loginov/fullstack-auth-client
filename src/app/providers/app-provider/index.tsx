import { RouterProvider } from 'react-router'
import { ThemeProvider } from '../theme-provider'

import { router } from '@app/routes/router'

export const AppProvider = () => {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
