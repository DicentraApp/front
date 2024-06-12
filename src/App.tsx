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
import AboutUs from './modules/AboutUs'
import Promotions from './modules/Promotions'
import Bouquets from './modules/Bouquets'
import SingleBouquet from './modules/SingleBouquet'
import Cart from './modules/Cart'
import Login from './modules/Login'
import Registration from './modules/Registration'
import MyProfile from './modules/MyProfile'
import Order from './modules/Order'
import SelectedFlowers from './modules/SelectedFlowers'

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
      {
        element: <AboutUs />,
        path: 'about_us',
      },
      {
        element: <Promotions />,
        path: 'promotions',
      },
      {
        element: <Bouquets />,
        path: 'bouquets',
      },
      {
        element: <SingleBouquet />,
        path: 'bouquets/:bouquetsId',
      },
      {
        element: <Cart />,
        path: 'cart',
      },
      {
        element: <Login />,
        path: '/login',
      },
      {
        element: <Registration />,
        path: '/registration',
      },
      {
        element: <MyProfile />,
        path: 'my-profile',
      },
      {
        element: <Order />,
        path: 'order',
      },
      {
        element: <SelectedFlowers />,
        path: 'selected-flowers',
      },
    ],
  },
])

export const App = () => <RouterProvider router={router} />
