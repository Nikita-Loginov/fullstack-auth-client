import { createBrowserRouter } from 'react-router'

import { PublicLayout, PrivateLayout, ErrorLayout } from '@widgets/layouts'

import { HomePage, RegisterPage, LoginPage } from '@pages/public'
import { CartPage } from '@pages/private'
import { NotFoundPage } from '@pages/error'

export let router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'auth',
        children: [
          {
            path: 'register',
            element: <RegisterPage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: 'cart',
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
