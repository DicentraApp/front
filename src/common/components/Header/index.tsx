import { FC } from 'react'
import Logo from './components/Logo'
import Search from './components/Search'
import UserIcon from './components/UserIcon'
import CartIcon from './components/Cart'
import Navigation from './components/Navigation'
import Phone from './components/Phone'

interface HeaderProps {}

export const navData = [
  {
    id: crypto.randomUUID(),
    title: 'our shops',
    link: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'bouquets',
    link: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Shipping and payment',
    link: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'About Us',
    link: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Contacts',
    link: '',
  },
  {
    id: crypto.randomUUID(),
    title: 'Order by photo',
    link: '',
  },

  {
    id: crypto.randomUUID(),
    title: 'Promotions',
    link: '',
  },
]

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center fixed z-50 py-5">
      <div className="container mb-6 flex items-center justify-between">
        <Phone phoneNumber="+380 (98) 997-19-91" />
        <Logo
          imageLogoPath="images/logo/logo_dicentra.png"
          subtitleLogo="Choose with heart"
        />

        <div className="w-96 flex items-center justify-between">
          <Search searchIconPath="images/search/search.svg" />
          <UserIcon iconUserPath="images/user/icon_user.svg" />
          <CartIcon cartIconPath="images/user/icon_cart.svg" cartNumber={89} />
        </div>
      </div>
      <Navigation data={navData} />
    </div>
  )
}
