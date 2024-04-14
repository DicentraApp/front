import AddCartBtn from '@/common/components/UI/Buttons/CartBtn'
import { IFlowerItem } from '@/common/dto/getFlowersDto'
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'

interface ITogetherWithCarouselItem {
  data: IFlowerItem
  setItemWidth: Dispatch<SetStateAction<number>> | undefined
}

const TogetherWithCarouselItem: FC<ITogetherWithCarouselItem> = ({
  data,
  setItemWidth,
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null)

  const { img, name, togetherWith, price } = data
  const priceWithout = price + togetherWith!.price
  const priceWith = price + togetherWith!.actionPrice
  const saving = priceWithout - priceWith

  useEffect(() => {
    if (setItemWidth) {
      setItemWidth(itemRef!.current!.offsetWidth)
    } else return
  }, [setItemWidth])

  return (
    <div className="min-w-1/2 pr-4" ref={itemRef}>
      <div className="flex items-start pb-7 border-b border-gold mb-7">
        <div>
          <div className="w-[308px] h-[330px] bg-white flex items-center justify-center">
            <img
              className="w-52 h-52 object-contain"
              src={`images/flowers/${img}.png`}
              alt={name}
            />
          </div>
          <h3 className="font-normal text-center my-4">Bouquet {name}</h3>
          <div className="text-center mb-4">
            <span className="font-semibold text-xl ">{price}</span> $
          </div>
        </div>

        <span className="text-3xl text-grey font-light bg-white h-[330px] flex items-center">
          +
        </span>

        <div>
          <div className="w-[308px] h-[330px] bg-white flex items-center justify-center">
            <img
              className="w-48 h-48 object-contain"
              src={`images/${togetherWith?.imgPath}`}
              alt={name}
            />
          </div>
          <h3 className="font-normal text-center my-4">
            Chocolates {togetherWith?.name}
          </h3>
          <div className="text-center mb-4">
            <span
              className={`${!togetherWith?.actionPrice ? 'text-dark' : 'mr-2 text-gold line-through'} font-semibold text-xl `}
            >
              {togetherWith?.price}
            </span>
            <span className="font-semibold text-xl ">
              {!togetherWith?.actionPrice ? null : togetherWith.actionPrice}
            </span>{' '}
            $
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div className="font-semibold text-xl">
          <div className="text-sale text-sm mb-1">Saving {saving} $</div>
          <span className="mr-3 text-gold line-through">{priceWithout}</span>
          <span className="text-dark ">{priceWith}</span> $
        </div>
        <AddCartBtn text="Add to cart" />
      </div>
    </div>
  )
}

export default TogetherWithCarouselItem
