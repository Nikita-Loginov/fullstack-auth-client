import { createBrowserRouter } from 'react-router'

import { PublicLayout, PrivateLayout, ErrorLayout } from '../../widgets/layouts'

import { HomePage } from '../../pages/public'
import { CartPage } from '../../pages/private'
import { NotFoundPage } from '../../pages/error'

export let router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
  {
    element: <ErrorLayout />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
