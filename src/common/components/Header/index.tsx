import { FC } from 'react'
import Logo from './components/Logo'
import Search from './components/Search'
import UserIcon from './components/UserIcon'
import CartIcon from './components/Cart'
import Navigation from './components/Navigation'
import Phone from './components/Phone'
import { navData } from './data'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="w-full bg-white flex flex-col items-center fixed z-40 py-5">
      <div className="container mb-6 flex items-center justify-between">
        <Phone phoneNumber="+380 (98) 997-19-91" />
        <Logo
          imageLogoPath="/images/logo/logo_dicentra.png"
          subtitleLogo="Choose with heart"
        />

        <div className="w-92 flex items-center justify-between">
          <Search />
          <UserIcon />
          <CartIcon />
        </div>
      </div>
      <Navigation data={navData} />
    </header>
  )
}
