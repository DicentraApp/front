import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './common/components/Layout'
import Home from './modules/Home/index.tsx'
import OrderByPhoto from './modules/OrderByPhoto/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <OrderByPhoto />,
        path: 'order_by_photo',
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
