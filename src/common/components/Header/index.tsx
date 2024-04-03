import { FC } from 'react'
import Logo from './components/Logo'
import Search from './components/Search'
import UserIcon from './components/UserIcon'
import CartIcon from '../Cart'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="h-32 w-full bg-white flex items-center fixed z-50">
      <div className="container flex items-center justify-between">
        <a
          className="font-ubuntu font-light text-base text-dark"
          href="tel:380989971991"
        >
          +380 (98) 997-19-91
        </a>
        <Logo />

        <div className="w-96 flex items-center">
          <Search />
          <UserIcon />
          <CartIcon />
        </div>
      </div>
    </div>
  )
}
