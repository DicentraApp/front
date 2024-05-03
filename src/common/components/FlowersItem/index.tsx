import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IFlowerItem } from '@/common/dto/getFlowersDto'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setFlowerItem } from '@/features/flowers/flowersSlice'
import DarktBtn from '../../UI/Buttons/DarkBtn'
import { CircularProgress } from '@mui/material'
import { addToCart } from '@/features/cart/cartSlice'

interface IFlowersItemData {
  data: IFlowerItem
  setItemWidth?: Dispatch<SetStateAction<number>> | undefined
}

const FlowersItem: FC<IFlowersItemData> = ({ data, setItemWidth }) => {
  const dispatch = useAppDispatch()
  const { id, img, name, price, actionPrice } = data
  const { isLoading } = useAppSelector((state) => state.flowers)
  const itemRef = useRef<HTMLDivElement | null>(null)
  let actionPercent

  if (actionPrice) {
    const diff = Math.round((actionPrice / price) * 100)
    actionPercent = 100 - diff
  }

  const handleLinkClick = () => {
    dispatch(setFlowerItem(data))
  }

  useEffect(() => {
    if (setItemWidth) {
      setItemWidth(itemRef!.current!.offsetWidth)
    } else return
  }, [setItemWidth])

  return (
    <div className="min-w-[254px] pr-[10px] mb-12" ref={itemRef}>
      <Link
        className="w-full h-[330px] bg-white flex items-center justify-center shadow-lg mb-4 relative"
        to={`${id}`}
        onClick={handleLinkClick}
      >
        {isLoading && (
          <div className="text-center">
            {' '}
            <CircularProgress color="secondary" />
          </div>
        )}
        <img
          className="w-48 h-52 object-contain bg-white cursor-pointer"
          src={`images/flowers/${img}`}
          alt={name}
        />

        {actionPrice && (
          <div className="top-4 left-4 w-12 h-12 bg-white rounded-full border-2 border-gold border-solid text-gold text-sm absolute z-10 font-semibold flex items-center justify-center">
            -{actionPercent}%
          </div>
        )}
      </Link>
      <Link
        className="font-normal mb-3 cursor-pointer"
        to={`${id}`}
        onClick={handleLinkClick}
      >
        <h4 className="text-center">{name}</h4>
      </Link>
      <div className="text-center mb-4">
        <span
          className={`${!actionPrice ? 'text-dark' : 'mr-2 text-gold line-through'} font-semibold text-xl `}
        >
          {price}
        </span>
        <span className="font-semibold text-xl ">
          {!actionPrice ? null : actionPrice}
        </span>{' '}
        $
      </div>

      <div className="flex flex-col items-center">
        <DarktBtn
          text="Add to cart"
          width="w-32"
          handleClick={() => dispatch(addToCart(data))}
        />
        <Link
          to=""
          className="text-gold mt-3 hover:text-btnPressedGold transition-all"
        >
          Quick order
        </Link>
      </div>
    </div>
  )
}

export default FlowersItem
