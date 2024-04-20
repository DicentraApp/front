import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './common/components/Layout'
import Home from './modules/Home'
import OrderByPhoto from './modules/OrderByPhoto'
import Portal from './modules/Portal'
import SinglePortal from './modules/SinglePortal'
import PageNotFound from './modules/PageNotFound'
import ShippingAndPayment from './modules/ShippingAndPayment'
import Shops from './modules/Shops'
import Contacts from './modules/Contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <OrderByPhoto />,
        path: 'order_by_photo',
      },
      {
        element: <Portal />,
        path: 'portal',
      },
      {
        element: <SinglePortal />,
        path: 'portal/:portalId',
      },
      {
        element: <ShippingAndPayment />,
        path: 'shipping_and_payment',
      },
      {
        element: <Shops />,
        path: 'shops',
      },
      {
        element: <Contacts />,
        path: 'contacts',
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
