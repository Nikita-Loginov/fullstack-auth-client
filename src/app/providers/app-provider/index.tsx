import { RouterProvider } from 'react-router'
import { ThemeProvider } from '../theme-provider'

import { router } from '@app/routes/router'
import { Toaster } from 'sonner'

export const AppProvider = () => {
  return (
    <>
      <ThemeProvider>
        <Toaster position="bottom-right" duration={2000} />

        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
