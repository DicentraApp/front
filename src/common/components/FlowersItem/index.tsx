import { IFlowerItem } from '@/common/dto/getFlowersDto'
import { useAppSelector } from '@/common/hooks/hooks'
import { Spinner } from 'flowbite-react'
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'

interface IFlowersItemData {
  data: IFlowerItem
  setItemWidth?: Dispatch<SetStateAction<number>> | undefined
}

const FlowersItem: FC<IFlowersItemData> = ({ data, setItemWidth }) => {
  const { img, name, price, actionPrice } = data
  const { isLoading } = useAppSelector((state) => state.flowers)
  const itemRef = useRef<HTMLDivElement | null>(null)
  let actionPercent

  if (actionPrice) {
    const diff = Math.round((actionPrice / price) * 100)
    actionPercent = 100 - diff
  }

  useEffect(() => {
    if (setItemWidth) {
      setItemWidth(itemRef!.current!.offsetWidth)
    } else return
  }, [setItemWidth])

  return (
    <div className="min-w-[300px] cursor-pointer pr-14 last:mr-0" ref={itemRef}>
      <div className="w-full h-[330px] bg-white flex items-center justify-center shadow-lg mb-4 relative">
        {isLoading && (
          <div className="text-center">
            {' '}
            <Spinner color="info" size="md" />
          </div>
        )}
        <img
          className="w-48 h-52 object-contain animate-fade"
          src={`images/flowers/${img}.png`}
          alt={name}
        />

        {actionPrice && (
          <div className="top-4 left-4 w-12 h-12 bg-white rounded-full border-2 border-gold border-solid text-gold text-sm absolute z-10 font-semibold flex items-center justify-center">
            -{actionPercent}%
          </div>
        )}
      </div>
      <h4 className="font-normal text-center mb-3">{name}</h4>
      <div className="text-center mb-4">
        {' '}
        <span
          className={`${!actionPrice ? 'text-dark' : 'mr-2 text-gold line-through'} font-semibold text-xl `}
        >
          {price}
        </span>
        <span className="font-semibold text-xl ">
          {!actionPrice ? null : actionPrice}
        </span>
        $
      </div>

      <div className="flex flex-col items-center">
        <button className="mb-2 bg-dark hover:bg-btnPressedDark transition-all py-3 px-7 text-white rounded-3xl">
          Add to cart
        </button>
        <a
          href=""
          className="text-gold hover:text-btnPressedGold transition-all"
        >
          Quick order
        </a>
      </div>
    </div>
  )
}

export default FlowersItem
