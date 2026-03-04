import { RouterProvider } from 'react-router'
import { router } from '../../routes/router'

export const AppProvider = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
