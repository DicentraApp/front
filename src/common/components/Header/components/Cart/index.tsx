import { FC } from 'react'

interface ICartIcon {
  cartIconPath: string
  cartNumber: number
}

const CartIcon: FC<ICartIcon> = ({ cartIconPath, cartNumber }) => {
  return (
    <button className="ml-3 flex items-center">
      <img src={cartIconPath} />
      <div className="w-9 h-9 bg-dark rounded-full ml-0.5 flex items-center justify-center">
        <span className="text-white text-sm font-inter">{cartNumber}</span>
      </div>
    </button>
  )
}

export default CartIcon
